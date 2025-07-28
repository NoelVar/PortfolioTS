// imports
import { InferSchemaType, model, Schema } from "mongoose";

// Shcema + configuration
const ProjectSchema = new Schema({
    title: { type: String, required: true, },
    content: { type: String, required: true },
    image: { type: Buffer, contentType: String },
    date: {
        start: { type: Date, required: true, },
        end: { type: Date },
    },
    link: {type: String},
}, { timestamps: true });

// TypeScript configuration
type Project = InferSchemaType<typeof ProjectSchema>;

/**
 * exporting model type Project,
 * naming it Project (will change to plural in MDB),
 * enforce the ProjectSchema on the model creation
 * */ 
export default model<Project>("Project", ProjectSchema);

// End of Document --------------------------------------------------------------------------------