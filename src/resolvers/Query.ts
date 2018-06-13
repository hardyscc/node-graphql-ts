export const Query = {
  hello: (_, { name }: GQL.IHelloOnQueryArguments) => `Hello ${name || "World"}`
};
