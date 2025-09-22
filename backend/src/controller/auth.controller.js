import { User } from "../models/user.model.js";

export const authCall = async (req, res) => {
  try {
    const { id, firstName, lastName, imageUrl } = req.body;

    // check if the user already exists
    const user = await User.find({ clerkId: id });

    if (!user) {
      // signup
      await User.create({
        clearkId: id,
        fullName: `${firstName} ${lastName}`,
        imageUrl,
      });
    }

    res.status(200).json({ success: true });
  } catch (error) {
    console.log("Error in auth callback", error);
    res.status(500).json({ message: "Internal server error", error });
  }
};
