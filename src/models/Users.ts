import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, trim: true, default: null },
    email: { type: String, trim: true, unique: true, default: null },
    image: { type: String, trim: true, default: null },
    tel: { type: String, trim: true, default: null },
    password: { type: String, trim: true, default: null },
  },
  { timestamps: true }
);

// hash the password before saving
UserSchema.pre('save', async function (next) {
  if (this.isModified('password'))
    this.password = bcrypt.hashSync(this.password, 10);

  next();
});

// compare the password
UserSchema.methods.comparePassword = function (password: string) {
  return bcrypt.compare(password, this.password);
};

export default mongoose.models.User || mongoose.model('User', UserSchema);
