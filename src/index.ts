import dotenv from "dotenv";
import express, { Application } from "express";
import mongoose from "mongoose";
import newsRouter from "./routes/news";
import categoriesRouter from "./routes/categories";
import settingsRouter from "./routes/settings";
import homepageRouter from "./routes/homepage";
import cors from "cors";
import adminRouter from "./routes/admin";

dotenv.config();
const app: Application = express();

app.use(cors({
    origin: ["http://localhost:3000", "http://localhost:3001"]
}));

app.use(express.json());

app.use("/api/news", newsRouter);
app.use("/api/categories", categoriesRouter);
app.use("/api/settings", settingsRouter);
app.use("/api/homepage", homepageRouter);
app.use("/api/admin", adminRouter);

const PORT = process.env.PORT || 5000;
const MONGODB_URL = process.env.MONGODB_URL;

if (!MONGODB_URL) {
    console.error("HATA: .ENV DOSYASINDA MONGODB URI BULUNAMADI");
    process.exit(1);
}

mongoose.connect(MONGODB_URL)
    .then(() => {
        console.log("mongodb baglantisi basarili");
        app.listen(PORT, () => {
            console.log(`Sunucu ${PORT} portunda çalisiyor.`);
        });
    })
    .catch((err: any) => {
        console.log("mongodb baglantisi basarisiz", err.message);
    });