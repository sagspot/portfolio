import mongoose from 'mongoose';

const CategorySchema = new mongoose.Schema(
  {
    name: { type: String, trim: true },
    slug: { type: String, trim: true },
  },
  { timestamps: true }
);

export default mongoose.models.Category ||
  mongoose.model('Category', CategorySchema);
