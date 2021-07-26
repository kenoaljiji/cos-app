import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@cos.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Ivan Zak",
    email: "ivan@cos.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Amir Karajkovic",
    email: "amir@cos.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
