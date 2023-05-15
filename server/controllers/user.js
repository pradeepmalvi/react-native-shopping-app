import { User } from "../models/user.js";

export const login = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select("+password");

  // Handle error
  if (!user) {
    return res.status(400).json({ success: false, message: "Incorrect Email" });
  }

  const isMatched = await user.camparePassword(password);
  console.log("isMatched", isMatched);

  if (!isMatched) {
    return res
      .status(400)
      .json({ success: false, message: "Incorrect Password" });
  }

  res.status(200).json({
    success: true,
    message: `Welcome Back, ${user.name} `,
  });
};

export const signup = async (req, res, next) => {
  const { name, email, password, address, city, country, pinCode } = req.body;

  // Add cloudinary here

  await User.create({ name, email, password, address, city, country, pinCode });

  res.status(201).json({ success: true, message: "Registered Successfully" });
};
