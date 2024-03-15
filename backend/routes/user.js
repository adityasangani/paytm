const express = require("express");
const jwt = require("jsonwebtoken");
const zod = require("zod");
const { JWT_SECRET } = require("../.env/config");
const { User } = require("../db");
const { authMiddleware } = require("../middleware");

const router = express.Router();

const signupBody = zod.object({
  username: zod.string().email(),
  password: zod.string(),
  firstName: zod.string(),
  lastName: zod.string(),
});

const updateBody = zod.object({
  password: zod.string().optional(),
  firstName: zod.string().optional(),
  lastName: zod.string().optional(),
});

router.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const validator = signupBody.safeParse({
    username,
    password,
    firstName,
    lastName,
  });

  if (!validator.success) {
    return res.status(411).json({ msg: "Wrong inputs have been sent" });
  }

  const existingUser = await User.findOne({ username });
  if (existingUser) {
    return res.status(411).json({
      message: "Email already taken / Incorrect inputs",
    });
  }

  const user = await User.create({
    username,
    password,
    firstName,
    lastName,
  });

  const userId = user._id;
  const token = jwt.sign({ userId }, JWT_SECRET);

  return res.json({
    message: "User created successfully",
    token: token,
  });
});

router.post("/signin", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const existingUser = await User.findOne({ username, password });

  if (!existingUser) {
    return res.status(411).json({
      message: "Error while logging in",
    });
  }

  const token = jwt.sign({ userId: existingUser._id }, JWT_SECRET);

  return res.json({
    token: token,
  });
});

router.put("/", authMiddleware, async (req, res) => {
  const validatedBody = updateBody.safeParse(req.body);
  if (!validatedBody.success) {
    res.status(411).json({
      message: "Error while updating information",
    });
  }

  await User.updateOne({ _id: req.userId }, req.body);
  res.json({
    message: "Updated successfully",
  });
});

router.get("/bulk", async (req, res) => {
  const filter = req.query.filter || "";

  const users = await User.find({
    $or: [
      {
        firstName: {
          $regex: filter,
        },
      },
      {
        lastName: {
          $regex: filter,
        },
      },
    ],
  });
  res.json({
    user: users.map((user) => ({
      username: user.username,
      firstName: user.firstname,
      lastName: user.lastName,
      _id: user._id,
    })),
  });
});

module.exports = router;
