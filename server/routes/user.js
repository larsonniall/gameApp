import express from "express";
import {
  registerUser,
  findUserById,
  findUserProfile,
  deleteUser,
} from "../controllers/user.js";
import { requireSignin, hasAuthorization } from "../controllers/auth.js";

const router = express.Router();

router.route("/").post(registerUser);

router
  .route("/api/users/:userId")
  .get(requireSignin, findUserProfile)
  .delete(requireSignin, hasAuthorization, deleteUser);

router.param("userId", findUserById);

export default router;

// learn express better