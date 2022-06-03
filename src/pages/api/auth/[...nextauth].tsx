import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import connectDB from '../../../lib/connectDB';
import { User } from '../../../models';

export default NextAuth({
  providers: [
    //   @ts-ignore
    CredentialsProvider({
      name: 'Credentials',
      async authorize(credentials, req) {
        await connectDB();

        const user = await User.findOne({ email: credentials.email });
        if (!user) throw new Error('Invalid email or password');

        const valid = await user.comparePassword(credentials.password);
        if (!valid) throw new Error('Invalid email or password');

        return user;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
});
