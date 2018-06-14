import { getConnectionOptions, createConnection } from "typeorm";

export const createTypeormConn = async () => {
  const connectionOptions = process.env.NODE_ENV
    ? await getConnectionOptions(process.env.NODE_ENV)
    : await getConnectionOptions();
  return createConnection({ ...connectionOptions, name: "default" });
};
