import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Amish",
    lastName: "Mishra",
    email: "amishmishra11@gmail.com",
    password: "amishmishra",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    firstName: "test1",
    lastName: "test2",
    email: "test@gmail.com",
    password: "test",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
