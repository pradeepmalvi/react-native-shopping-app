import { User } from "../models/user.js";

export const signup = async (req, res, next) => {
  const { name, email, password, address, city, country, pinCode } = req.body;

  // Add cloudinary here

  await User.create({ name, email, password, address, city, country, pinCode });

  res.status(201).json({ success: true, message: "Registered Successfully" });
};
