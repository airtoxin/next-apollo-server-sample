import { ContextFunction } from "apollo-server-core";
import { IncomingMessage } from "http";

import { createDataSources } from "./data-sources";

export type ApolloContext = {
  req: IncomingMessage;
};

export const createApolloContext: ContextFunction<
  { req: IncomingMessage },
  ApolloContext
> = async ({ req }) => {
  return { req };
};

export type ResolverContext = ApolloContext & {
  dataSources: ReturnType<typeof createDataSources>;
};
