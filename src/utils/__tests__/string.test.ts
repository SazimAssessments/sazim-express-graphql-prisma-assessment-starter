import { parseJson } from "../string";

describe("parseJson", () => {
  it("should return a parsed object for valid JSON string", () => {
    const jsonString = '{"key": "value"}';
    const result = parseJson(jsonString);

    expect(result).toEqual({ key: "value" });
  });

  it("should return null for invalid JSON string", () => {
    const invalidJsonString = "{key: value}";
    const result = parseJson(invalidJsonString);

    expect(result).toBeNull();
  });

  it("should return null for non-string input", () => {
    const result = parseJson(null as unknown as string);

    expect(result).toBeNull();
  });
});
