import { Request, Response, Router } from "express";
import News from "../models/News";
import Category from "../models/Category";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
    try {
        const categories = await Category.find({ status: "active" })
            .select("title slug")
            .sort({ order: 1 });
        res.json(categories)
    } catch (error) {
        res.status(500).json({ error: "kategoriler getirilemedi" });
    }
})

router.get("/:slug/news", async (req: Request, res: Response) => {
    try {
        const category = await Category.findOne({ slug: req.params.slug, status: "active" })
            .select("name title slug");

        if (!category) {
            return res.status(404).json({ error: "kategori bulunamadi " });
        }
        const news = await News.find({ category: category._id, status: "published" })
            .sort({ publishedAt: -1 })
            .select("name title slug summary coverImage publishedAt")
            .populate("category", "name title slug");
        res.json({ category, news });
    } catch (error) {
        res.status(500).json({ error: "kategoriye ait haber getirilemedi" });
    }
});

router.post("/", async (req: Request, res: Response) => {
    try {
        const { title, slug, description, order } = req.body;
        const category = await Category.create({ title, slug, order, status: "active" });
        res.json(category);
    } catch (error) {
        console.log("hata:", error);
        res.status(500).json({ error: "kategori eklenemedi" });
    }
});

router.delete("/:id", async (req: Request, res: Response) => {
    try {
        await Category.findByIdAndUpdate(req.params.id, { status: "passive" });
        res.json({ message: "kategori silindi" });
    } catch (error) {
        res.status(500).json({ error: "kategori silinemedi" });
    }
});

export default router;