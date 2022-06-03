import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { portfolio, testimonials, users } from './src/data';
import { Portfolio, Testimonial, User } from './src/models';

dotenv.config({ path: __dirname + '/.env.local' });

const MONGODB_URI = process.env.MONGODB_URI;

(async () => {
  if (!MONGODB_URI)
    return console.log(' ☢ Error => MONGODB_URI is not defined!');

  try {
    mongoose.connect(MONGODB_URI);
    console.log(' ✔  Connected to Database!');
  } catch (error) {
    console.error(` ☢  Error => ${error}`);
    process.exit(1);
  }
})();

const importData = async () => {
  try {
    await User.deleteMany();
    await Portfolio.deleteMany();
    await Testimonial.deleteMany();
    console.log(' ✔  Data destroyed. Uploading new data...');

    console.log(' ⏳  Importing Data...');

    await User.insertMany(users);
    console.log(' ✔  Users uploaded. Uploading testimonials...');

    await Testimonial.insertMany(testimonials);
    console.log(' ✔  Testimonials uploaded. Uploading portfolio...');

    await Portfolio.insertMany(portfolio);
    console.log(' ✔  Data imported successfully!');

    process.exit(0);
  } catch (error) {
    console.error(` ☢  Error => ${error}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  console.log(' ⏳  Destroying Data...');

  try {
    await User.deleteMany();
    await Portfolio.deleteMany();
    await Testimonial.deleteMany();

    console.log(' ✔  Data destroyed successfully!');
    process.exit(0);
  } catch (error) {
    console.error(` ☢  Error => ${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') destroyData();
else importData();
