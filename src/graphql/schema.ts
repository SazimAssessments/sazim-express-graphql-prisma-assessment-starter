import { buildSchema } from "graphql";

const schema = buildSchema(`
  type Query {
    getStatus: String!
  }
`);

export default schema;
