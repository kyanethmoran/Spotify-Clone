import { clerkClient } from "@clerk/express";

// make sure that user is authenticated
export const protectRoute = async (req, res, next) => {
  if (!req.auth.userId) {
    return req
      .status(401)
      .json({ message: "Unauthorized - you must be logged in" });
  }

  next();
};

// ensure that only admins can access the route, not just regular users
export const requireAdmin = async (req, res, next) => {
  try {
    const currentUser = await clerkClient.users.getUser(req.auth.userId);
    const isAdmin =
      process.env.ADMIN_EMAIL === currentUser.primaryEmailAddress?.emailAddress;

    if (!isAdmin) {
      return res
        .status(403)
        .json({ messsage: "Unauthorized - you must be an admin" });
    }

    next();
  } catch (error) {
    return res.status(500).json({ messsage: "Internal server error", error });
  }
};
