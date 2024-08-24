import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getUsersForSidebar } from "../controllers/userController.js";

// /api/messages/ anything -> Router

const router = express.Router();

// get users for sidebar
router.get("/", protectRoute, getUsersForSidebar);

export default router;
