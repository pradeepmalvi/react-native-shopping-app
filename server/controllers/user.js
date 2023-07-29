import { asyncError } from "../middlewares/error.js";
import { User } from "../models/user.js";
import ErrorHandler from "../utils/error.js";

export const login = asyncError(async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select("+password");

  // Handle error
  if (!user) {
    return next(new ErrorHandler("Incorrect Email or Password", 400));
  }

  const isMatched = await user.camparePassword(password);

  if (!isMatched) {
    return next(new ErrorHandler("Incorrect Email or Password", 400));
  }

  const token = user.generateToken();

  res
    .status(200)
    .cookie("token", token, cookieOptions)
    .json({
      success: true,
      message: `Welcome Back, ${user.name} `,
    });
});

export const signup = asyncError(async (req, res, next) => {
  const { name, email, password, address, city, country, pinCode } = req.body;

  // Add cloudinary here

  const user = await User.create({
    name,
    email,
    password,
    address,
    city,
    country,
    pinCode,
  });

  const token = user.generateToken();

  res
    .status(201)
    .cookie("token", token, cookieOptions)
    .json({ success: true, message: "Registered Successfully" });
});

export const logout = asyncError(async (req, res, next) => {
  res
    .status(200)
    .cookie("token", "", {
      ...cookieOptions,
      expires: new Date(Date.now()),
    })
    .json({ success: true, message: "Logged Out Successfully!" });
});

export const getMyProfile = asyncError(async (req, res, next) => {
  const user = await User.findById(req.user._id);
  res.status(200).json({ success: true, user });
});

export const cookieOptions = {
  expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
  secure: process.env.NODE_ENV === "development" ? false : true,
  httpOnly: process.env.NODE_ENV === "development" ? false : true,
  sameSite: process.env.NODE_ENV === "development" ? false : "none",
};
