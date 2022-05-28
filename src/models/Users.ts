import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, trim: true, default: null },
    email: { type: String, trim: true, unique: true, default: null },
    image: { type: String, trim: true, default: null },
    tel: { type: String, trim: true, default: null },
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model('User', UserSchema);
