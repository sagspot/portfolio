import mongoose from 'mongoose';

const TestimonialSchema = new mongoose.Schema(
  {
    name: { type: String, trim: true, default: null },
    img: { type: String, trim: true, unique: true, default: null },
    desc: { type: String, trim: true, default: null },
  },
  { timestamps: true }
);

export default mongoose.models.Testimonial ||
  mongoose.model('Testimonial', TestimonialSchema);
