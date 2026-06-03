import mongoose, { Document, Schema, Types } from "mongoose";


export interface INews extends Document {
    title: string;
    slug: string;
    summary: string;
    content: string;
    category: Types.ObjectId;
    publishedAt: Date;
    coverImage: string;
    status: "draft" | "published";
}

const NewsSchema: Schema = new Schema({
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    summary: { type: String, required: true },
    content: { type: String, required: true },
    category: { type: Schema.Types.ObjectId, ref: "Category" },
    publishedAt: { type: Date, default: Date.now },
    coverImage: { type: String, required: true },
    status: { type: String, enum: ["draft", "published"], default: "draft" }
}, { timestamps: true });

export default mongoose.model<INews>("News", NewsSchema, "News");