import { GraphQLServer } from "graphql-yoga";
import resolvers from "./resolvers";

const options = { port: process.env.PORT };

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers
});

server.start(options, ({ port }) =>
  console.log(`Server is running on localhost:${port}`)
);
