import express from "express";
import { getMessage, sendMessage } from "../controllers/messageController.js";
import protectRoute from "../middleware/protectRoute.js";

// /api/messages/ anything -> Router

const router = express.Router();

// messageController functions
//
//

// send message to
// check auth before sending message
router.post("/send/:id", protectRoute, sendMessage);

// get messages between current user and id passed
router.get("/:id/", protectRoute, getMessage);

router.post("/receive");
router.post("/");
router.post("/");

export default router;
