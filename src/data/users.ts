import bcrypt from 'bcrypt';

const users = [
  {
    name: 'Oliver Sagala',
    email: 'hello@sagspot.co.ke',
    password: bcrypt.hashSync('sag32ala', 10),
  },
];

export default users;
