//backendForProfile/profileRoutes.ts
import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.json({ profile: "User profile data here" });
});

export default router;
