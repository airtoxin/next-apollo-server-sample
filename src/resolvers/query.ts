import { QueryResolvers } from "./types.gen";

export const Query: QueryResolvers = {
  books: () => [
    {
      __typename: "Book",
      title: "The Awakening",
      author: "Kate Chopin",
    },
    {
      __typename: "Book",
      title: "City of Glass",
      author: "Paul Auster",
    },
  ],
};
