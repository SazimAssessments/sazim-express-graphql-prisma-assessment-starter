import cors from "cors";
import { CorsOptions } from "cors";

const corsOptions: CorsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
};

const corsMiddleware = cors(corsOptions);

export default corsMiddleware;
