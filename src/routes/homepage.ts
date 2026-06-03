import { Router, Request, Response } from "express";
import News from "../models/News";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
    try {
        const featured = await News.findOne({ status: "published" })
            .sort({ createdAt: -1 })
            .select("title slug summary coverImage publishedAt")
            .populate("category", "title slug");

        const latest = await News.find({ status: "published" })
            .sort({ createdAt: -1 })
            .select("title slug");

        res.json({ featured, latest });
    } catch (error) {
        res.status(500).json({ error: "anasayfa verisi getirilemedi" });
    }
});
export default router;