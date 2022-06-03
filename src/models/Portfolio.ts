import mongoose from 'mongoose';

const PortfolioSchema = new mongoose.Schema(
  {
    title: { type: String, trim: true },
    img: { type: String, trim: true },
    source: { type: String, trim: true },
    url: { type: String, trim: true },
    desc: { type: String, trim: true },
    isFeatured: { type: Boolean, default: false },
    category: { type: String, enum: ['website', 'api'], required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Portfolio ||
  mongoose.model('Portfolio', PortfolioSchema);
