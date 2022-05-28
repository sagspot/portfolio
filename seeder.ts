import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { categories, portfolio, testimonials, users } from './src/data';
import { Category, Portfolio, Testimonial, User } from './src/models';

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
  console.log(' ⏳  Importing Data...');

  try {
    await User.deleteMany();
    await Category.deleteMany();
    await Portfolio.deleteMany();
    await Testimonial.deleteMany();
    console.log(' ✔  Data destroyed. Uploading new data...');

    await User.insertMany(users);
    console.log(' ✔  Users uploaded. Uploading testimonials...');

    await Testimonial.insertMany(testimonials);
    console.log(' ✔  Testimonials uploaded. Uploading portfolio...');

    const createdCategories = await Category.insertMany(categories);
    console.log(' ✔  Testimonials uploaded. Uploading categories...');

    const selectedCategory = createdCategories[0];
    console.log(` ✔  category <${selectedCategory.name}> selected...'`);

    const samplePortfolio = portfolio.map((gig) => ({
      ...gig,
      category: selectedCategory._id,
    }));

    await Portfolio.insertMany(samplePortfolio);
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
    await Category.deleteMany();
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
