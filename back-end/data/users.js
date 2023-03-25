import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Bilal Rana",
    email: "bilal@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Farhan Azam",
    email: "farhan@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
