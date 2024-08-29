export const parseJson = (str: string) => {
  if (typeof str !== "string") {
    return null;
  }

  try {
    return JSON.parse(str);
  } catch (error) {
    return null;
  }
};
