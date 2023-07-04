const { User, Book } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET = "mysecretsshhhhh";
const resolvers = {
  Query: {
    getSingleUser: async () => {
      return User.find({ username });
    }
  },
  Mutation: {
    createUser: async (parent, args) => {
      const newUser = await User.create(args);
      return "New User Created!";
    },
    saveBook: async (parent, { username, bookId }) => {
      const savedBook = await User.findOneAndUpdate(
        {
          username
        },
        { $$addToSet: { savedBooks: bookId } },
        { new: true }
      );
      return User.savedBooks;
    },

    deleteBook: async (parent, { username, bookId }) => {
      const nukedBook = await User.findOneAndUpdate(
        { username },
        { $pull: { savedBooks: bookId } },
        { new: true }
      );
      return User.savedBooks;
    },
    login: async (parent, { username, password }) => {
      try {
        const user = await User.findOne({ username });
        if (!user) {
          throw new Error("Unknown user...");
        }
        const passValid = await bcrypt.compare(password, user.password);
        if (!passValid) {
          throw new Error("Bad password");
        }
        const token = jwt.sign({ userId: user.id }, SECRET, {
          expiresIn: "2h"
        });
        return { token, user };
      } catch (error) {
        console.error(error);
        throw new Error("Error logging in");
      }
    }
  }
};

module.exports = resolvers;
