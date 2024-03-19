const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("./.env/config");

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res
      .status(403)
      .json({ message: "This is an authorization error bro" });
  }

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (err) {
    return res.status(403).json({ message: "Token issue" });
  }
};

module.exports = {
  authMiddleware,
};
