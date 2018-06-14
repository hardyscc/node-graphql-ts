import { GraphQLServer } from "graphql-yoga";
import { createTypeormConn } from "./createTypeormConn";
import resolvers from "./resolvers";

export const startServer = async () => {
  const server = new GraphQLServer({
    typeDefs: "./src/schema.graphql",
    resolvers
  });

  await createTypeormConn();

  return server.start(
    { port: process.env.NODE_ENV === "test" ? 0 : 4000 },
    ({ port }) => console.log(`Server is running on localhost:${port}`)
  );
};
