import { Router, Request, Response } from "express";
import News from "../models/News";

const router = Router();

router.get("/news", async (req: Request, res: Response) => {
    try {
        const news = await News.find()
            .sort({ createdAt: -1 })
            .select("title slug status publishedAt");
        res.json({ news });
    } catch (error) {
        res.status(500).json({ error: "haberler getirilemedi" });
    }
});

export default router;