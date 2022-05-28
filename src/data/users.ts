import bcrypt from 'bcrypt';

const users = [
  {
    name: 'Oliver Sagala',
    email: 'hello@sagspot.com',
    password: bcrypt.hashSync('sag32ala', 10),
  },
];

export default users;
