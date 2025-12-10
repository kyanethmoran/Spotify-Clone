import { User } from "../models/user.model.js";

export const getAllUsers = async (res, req, next) => {
  try {
    // we shouldnt see ourselves in the user lists
    const currentUserId = req.auth.userId;
    const users = await User.find({ clerkId: { $ne: currentUserId } });
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};
