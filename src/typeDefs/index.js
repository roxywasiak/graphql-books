const { gql } = require("apollo-server");
//tagged template function used

//each schema should have query and mutation type an array or object will be returned
//build in types all five are used here
const typeDefs = gql`
  type Book {
    id: ID
    title: String
    authors: [authors]
    description: String
    pageCount: Int
    categories: [String]
    averageRating: Float
    isEbook: Boolean
  }

  type Query {
    books: [Book]
    books(searchTerm: String!): [Book]
    book(bookId: ID!): Book
    myBooks: [Book]
  }
`;
//the resolvers responsibility is to make a request to go and find all the books and take the object (Book) and transform it to the new object and transform into array of books from each book in response.
module.exports = typeDefs;
