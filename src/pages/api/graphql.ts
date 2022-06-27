import { ApolloServer } from "apollo-server-express";
import { NextApiHandler } from "next";

import { typeDefs } from "../../schema";

export const config = {
  api: {
    bodyParser: false,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query: {
      books: () => [
        {
          title: "The Awakening",
          author: "Kate Chopin",
        },
        {
          title: "City of Glass",
          author: "Paul Auster",
        },
      ],
    },
  },
  csrfPrevention: true,
  cache: "bounded",
  introspection: true,
});

const started = server.start();

const handler: NextApiHandler = async (req, res) => {
  await started;
  return new Promise((resolve, reject) => {
    server.getMiddleware({ path: "/api/graphql" })(
      req as any,
      res as any,
      (result) => {
        result instanceof Error ? reject(result) : resolve(result);
      }
    );
  });
};

export default handler;
