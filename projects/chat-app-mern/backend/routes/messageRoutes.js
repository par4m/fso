import express from "express";
import { sendMessage } from "../controllers/messageController.js";
import protectRoute from "../middleware/protectRoute.js";

// /api/messages/ anything -> Router

const router = express.Router();

// messageController functions
//
//

// send message to
// check auth before sending message
router.post("/send/:id", protectRoute, sendMessage);

router.post("/receive");
router.post("/");
router.post("/");

export default router;
