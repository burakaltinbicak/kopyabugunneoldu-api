import mongoose, { Document, Schema } from "mongoose";

export interface ISettings extends Document {
    key: string;
    value: string;
    description?: string; // Zorunlu (required) olmadığı için sonuna "?" koyarak opsiyonel yaptık
}

const SettingsSchema: Schema = new Schema({
    key: { type: String, required: true, unique: true },
    value: { type: String, required: true },
    description: { type: String },
}, { timestamps: true });

export default mongoose.model<ISettings>("Settings", SettingsSchema, "Settings");
