import { Router, Request, Response } from "express";
import Settings from "../models/Settings";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
    try {
        const settings = await Settings.find().select("key value");
        res.json(settings);
    } catch (error) {
        res.status(500).json({ error: "ayarlar getirilemedi" });
    }
});

export default router;