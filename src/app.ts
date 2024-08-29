import express from "express";
import cors from "cors";
import { graphqlHTTP } from "express-graphql";
import dotenv from "dotenv";

import schema from "./graphql/schema";
import { root } from "./graphql/root";

dotenv.config();

const app = express();

app.use(cors());
app.options("*", cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(
    `GraphQL endpoint is available at http://localhost:${PORT}/graphql`
  );
});
