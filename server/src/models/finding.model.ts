import mongoose, { Schema, Document, Model } from "mongoose";

export interface FindingDocument extends Document {
  findingId: string;
  reportId: string;
  ruleId: string;
  severity: string;
  confidence: string;
  filePath: string;
  lineNumber: number;
  codeSnippet: string;
  explanation: string;
  createdAt: Date;
  // AI escalation fields (optional)
  aiEscalated?: boolean;
  aiFound?: boolean;
  risk?: string;
  aiConfidence?: number;
}

const FindingSchema = new Schema<FindingDocument>(
  {
    findingId: { type: String, required: true },
    reportId: { type: String, required: true, index: true },
    ruleId: { type: String, required: true },
    severity: { type: String, required: true },
    confidence: { type: String, required: true },
    filePath: { type: String, required: true },
    lineNumber: { type: Number, required: true },
    codeSnippet: { type: String, required: true },
    explanation: { type: String, required: true },
    createdAt: { type: Date, required: true, default: Date.now },
    // AI escalation fields (optional)
    aiEscalated: { type: Boolean, required: false },
    aiFound: { type: Boolean, required: false },
    risk: { type: String, required: false },
    aiConfidence: { type: Number, required: false },
  },
  { versionKey: false }
);

export const FindingModel: Model<FindingDocument> =
  mongoose.models.Finding || mongoose.model<FindingDocument>("Finding", FindingSchema);
