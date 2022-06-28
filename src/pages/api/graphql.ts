import { ApolloServer } from "apollo-server-express";
import { NextApiHandler } from "next";

import { createApolloContext } from "../../apollo-context";
import { typeDefs } from "../../graphql-schema";
import { resolvers } from "../../resolvers";

export const config = {
  api: {
    bodyParser: false,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: createApolloContext,
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
