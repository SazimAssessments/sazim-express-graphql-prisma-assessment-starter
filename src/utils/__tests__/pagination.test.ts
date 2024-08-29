import { Request } from "express";

import { getPagingOptions } from "../pagination";

describe("getPagingOptions", () => {
  it("should return default pagination options when query params are not provided", () => {
    const mockRequest = {
      query: {},
    } as Request;

    const result = getPagingOptions(mockRequest);
    expect(result).toEqual({ page: 1, limit: 5 });
  });

  it("should return pagination options based on query params", () => {
    const mockRequest = {
      query: { page: "2", limit: "20" },
    } as unknown as Request;

    const result = getPagingOptions(mockRequest);
    expect(result).toEqual({ page: 2, limit: 20 });
  });

  it("should handle invalid query params gracefully", () => {
    const mockRequest = {
      query: { page: "invalid", limit: "invalid" },
    } as unknown as Request;

    const result = getPagingOptions(mockRequest);
    expect(result).toEqual({ page: 1, limit: 5 });
  });
});
