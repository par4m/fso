import jwt from "jsonwebtoken";

const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });

  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, // 15d to  milliseconds
    httpOnly: true, // prevent XSS
    sameSite: "strict", // CSRF attacks
  });
};

export default generateToken;
