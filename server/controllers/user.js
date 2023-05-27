import { User } from "../models/user.js";
import ErrorHandler from "../utils/error.js";

export const login = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select("+password");

  // Handle error
  if (!user) {
    return next(new ErrorHandler("Incorrect Email", 400));
  }

  const isMatched = await user.camparePassword(password);

  if (!isMatched) {
    return next(new ErrorHandler("Incorrect Password", 400));
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
