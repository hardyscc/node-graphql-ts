import { request } from "graphql-request";
import { startServer } from "../startServer";
import { AddressInfo } from "net";

let getHost = () => "";

let app;

beforeAll(async () => {
  app = await startServer();
  const { port } = app.address() as AddressInfo;
  getHost = () => `http://localhost:${port}`;
});

afterAll(async () => {
  await app.close();
});

const email = "xxx@xxx.com";
const password = "password";

const mutation = `
mutation {
    register(email: "${email}", password: "${password}")
}
`;

test("Register user", async () => {
  const response = await request(getHost(), mutation);
  expect(response).toEqual({ register: true });
});
