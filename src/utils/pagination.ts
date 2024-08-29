import { Request } from "express";

import { LIMIT, PAGE } from "../constants/app.constants";

export const getPagingOptions = (req: Request) => {
  const page = Number(req.query.page) || PAGE;
  const limit = Number(req.query.limit) || LIMIT;

  return {
    page,
    limit,
  };
};
