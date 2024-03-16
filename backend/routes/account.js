const express = require("express");
const { Account } = require("../db");
const { authMiddleware } = require("../middleware");
const { default: mongoose } = require("mongoose");

const router = express.Router();

router.get("/balance", authMiddleware, async (req, res) => {
  const userId = req.userId;
  const account = await Account.findOne({
    userId,
  });
  res.json({
    balance: account.balance,
  });
});

router.post("/transfer", async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();
  const to = req.body.to;
  const amount = req.body.amount;
  const fromAccount = await Account.findOne({ userId: req.userId });
  if (fromAccount.balance < amount) {
    return res.status(400).json({
      message: "Insufficient balance",
    });
  }
  const toAccount = await Account.findOne({ userId: to });

  if (!toAccount) {
    return res.status(400).json({
      message: "Invalid account",
    });
  }

  await Account.updateOne(
    {
      userId: req.userId,
    },
    {
      $inc: {
        balance: -amount,
      },
    }
  );

  await Account.updateOne(
    {
      userId: to,
    },
    {
      $inc: {
        balance: amount,
      },
    }
  );

  await session.commitTransaction();

  res.json({
    message: "Transfer successful",
  });
});

module.exports = router;
