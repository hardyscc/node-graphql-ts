import "reflect-metadata";
import { GraphQLServer } from "graphql-yoga";
import { createConnection } from "typeorm";
import resolvers from "./resolvers";

const options = { port: process.env.PORT };

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers
});

createConnection().then(() => {
  server.start(options, ({ port }) =>
    console.log(`Server is running on localhost:${port}`)
  );
});
