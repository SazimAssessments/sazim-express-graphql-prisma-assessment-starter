import express from "express";
import { graphqlHTTP } from "express-graphql";
import request from "supertest";
import { PrismaClient } from "@prisma/client";

import schema from "../../../graphql/schema";
import { getStatus } from "../../../graphql/resolvers/statusResolver";

jest.mock("@prisma/client", () => {
  const mPrismaClient = {
    $queryRaw: jest.fn(),
    $disconnect: jest.fn(),
  };
  return { PrismaClient: jest.fn(() => mPrismaClient) };
});

describe("StatusResolver", () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let prismaMock: any;
  let testApp: express.Application;

  beforeAll(() => {
    testApp = express();
    testApp.use(
      "/graphql",
      graphqlHTTP({
        schema,
        rootValue: { getStatus },
        graphiql: false,
      })
    );
    prismaMock = new PrismaClient();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("returns a message if server is connected to db", async () => {
    prismaMock.$queryRaw.mockResolvedValue([{ "1": 1 }]);

    const query = `
      query {
        getStatus
      }
    `;

    const res = await request(testApp)
      .post("/graphql")
      .send({ query })
      .expect(200);

    expect(res.body.data.getStatus).toBe(
      "Server is running and db is connected"
    );
  });

  it("returns an error message if db connection fails", async () => {
    prismaMock.$queryRaw.mockRejectedValue(new Error("DB connection failed"));

    const query = `
      query {
        getStatus
      }
    `;

    const res = await request(testApp)
      .post("/graphql")
      .send({ query })
      .expect(200);

    expect(res.body.data.getStatus).toBe(
      "Server is running but db connection failed"
    );
  });
});
