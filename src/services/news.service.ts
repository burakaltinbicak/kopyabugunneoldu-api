import News from "../models/News"

export const newsService = {
    search: async (query?: string, categoryId?: string, sortOrder: string = 'newest') => {
        const filter: any = { status: "published" };

        if (query) {
            filter.$or = [
                { title: { $regex: query, $options: "i" } },
                { summary: { $regex: query, $options: "i" } },
            ];
        }

        if (categoryId) {
            filter.category = categoryId;
        }

        const sort: any = sortOrder === 'oldest' ? { publishedAt: 1 } : { publishedAt: -1 };

        return await News.find(filter)
            .sort(sort)
            .select("title slug summary content coverImage publishedAt category")
            .populate("category", "name slug");
    },

    getBySlug: async (slug: string) => {
        return await News.findOne({ slug, status: "published" })
            .select("title slug summary content category coverImage publishedAt")
            .populate("category", "name slug");
    }
}