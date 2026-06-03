import mongoose, { Document, Schema } from "mongoose";

export interface ICategory extends Document {
    title: string;
    slug: string;
    description: string;
    order: number;
    status: "active" | "passive";
}

const CategorySchema: Schema = new Schema({
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String },
    order: { type: Number, required: true },
    status: { type: String, enum: ["active", "passive"], default: "active" },
}, { timestamps: true });

export default mongoose.model<ICategory>("Category", CategorySchema);