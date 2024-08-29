import dayjs from "dayjs";

import { formatDate } from "../dates";

describe("formatDate", () => {
  it("should format the createdAt and updatedAt properties correctly", () => {
    const pastDate = dayjs().subtract(1, "year").toDate();

    const input = {
      createdAt: pastDate.toString(),
      updatedAt: pastDate.toString(),
    };

    const result = formatDate(input);

    expect(result.createdAt).toEqual(
      dayjs(pastDate).format("DD-MM-YYYY h:mm:ss")
    );
    expect(result.updatedAt).toEqual(
      dayjs(pastDate).format("DD-MM-YYYY h:mm:ss")
    );
  });

  it("should use current date when createdAt and updatedAt are not provided", () => {
    const input = {
      createdAt: "",
      updatedAt: "",
    };

    const result = formatDate(input);

    expect(result.createdAt).toEqual(
      dayjs(Date.now()).format("DD-MM-YYYY h:mm:ss")
    );
    expect(result.updatedAt).toEqual(
      dayjs(Date.now()).format("DD-MM-YYYY h:mm:ss")
    );
  });
});
