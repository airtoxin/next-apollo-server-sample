import gql from "graphql-tag";

export const typeDefs = gql`
  type Book @cacheControl(maxAge: 7200) {
    title: String! @cacheControl(maxAge: 3600)
    author: String!
    viewerHasPaid: Boolean! @cacheControl(scope: PRIVATE)
  }

  type Query {
    books: [Book!]
  }

  # ===== cache directive =====
  enum CacheControlScope {
    PUBLIC
    PRIVATE
  }
  directive @cacheControl(
    maxAge: Int
    scope: CacheControlScope
    inheritMaxAge: Boolean
  ) on FIELD_DEFINITION | OBJECT | INTERFACE | UNION
`;
