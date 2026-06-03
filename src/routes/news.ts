import { Router, Request, Response } from "express";
import { newsService } from "../services/news.service";
import News from "../models/News";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
    try {
        const { search, category, sort } = req.query;
        const news = await newsService.search(
            search as string,
            category as string,
            sort as string
        );
        res.json({ news });
    } catch (error) {
        res.status(500).json({ error: "haberler getirilemedi" });
    }
});

router.get("/:slug", async (req: Request, res: Response) => {
    try {
        const news = await newsService.getBySlug(req.params.slug as string);
        if (!news) {
            return res.status(404).json({ error: "haber bulunamadi" });
        }
        res.json(news);
    } catch (error) {
        res.status(500).json({ error: "haber getirilemedi" });
    }
});

router.post("/", async (req: Request, res: Response) => {
    try {
        const { title, slug, summary, content, category, coverImage, status } = req.body;
        const news = await News.create({ title, slug, summary, content, category, coverImage, status });
        res.json(news);
    } catch (error) {
        res.status(500).json({ error: "haber eklenemedi" });
    }
});

router.put("/:id", async (req: Request, res: Response) => {
    try {
        const { title, slug, summary, content, category, coverImage, status } = req.body;
        const news = await News.findByIdAndUpdate(
            req.params.id,
            { title, slug, summary, content, category, coverImage, status },
            { new: true }
        );
        if (!news) return res.status(404).json({ error: "haber bulunamadi" });
        res.json(news);
    } catch (error) {
        res.status(500).json({ error: "haber guncellenemedi" });
    }
});

router.delete("/:id", async (req: Request, res: Response) => {
    try {
        await News.findByIdAndDelete(req.params.id);
        res.json({ message: "haber silindi" });
    } catch (error) {
        res.status(500).json({ error: "haber silinemedi" });
    }
});

export default router;  