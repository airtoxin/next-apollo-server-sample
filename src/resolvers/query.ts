import { QueryResolvers } from "./types.gen";

export const Query: QueryResolvers = {
  books: () => [
    {
      __typename: "Book",
      title: "The Awakening",
      author: "Kate Chopin",
      viewerHasPaid: true,
    },
    {
      __typename: "Book",
      title: "City of Glass",
      author: "Paul Auster",
      viewerHasPaid: false,
    },
  ],
};
