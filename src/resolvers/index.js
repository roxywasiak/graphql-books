const { books, book, createBook, myBooks } = require("./books");
//will return an object// will be a query//match all the queries that are allowed should match exactly key = function
const resolvers = {
  Query: {
    books,
    book,
    myBooks,
  },
  Mutation: {
    createBook,
  },
};

module.exports = resolvers;
