import { request } from "graphql-request";
import { startServer } from "../startServer";
import { AddressInfo, Server } from "net";

let app: Server;
const getHost = () => {
  const { port } = app.address() as AddressInfo;
  return `http://localhost:${port}`;
};

beforeAll(async () => {
  app = await startServer();
});

afterAll(async () => {
  app.close();
});

test("Register user", async () => {
  const email = "xxx@xxx.com";
  const password = "password";
  const mutation = `
    mutation {
      register(email: "${email}", password: "${password}")
    }
  `;
  const response = await request(getHost(), mutation);
  expect(response).toEqual({ register: true });
});

test("Hello user", async () => {
  const name = "xxx";
  const query = `
    query {
      hello(name: "${name}")
    }
  `;
  const response = await request(getHost(), query);
  expect(response).toEqual({ hello: `Hello ${name}` });
});
