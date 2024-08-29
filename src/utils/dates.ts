import dayjs from "dayjs";

const formatDate = (result: { createdAt: string; updatedAt: string }) => {
  const createdAt = result?.createdAt || Date.now();
  const updatedAt = result?.updatedAt || Date.now();

  result.createdAt = dayjs(createdAt).format("DD-MM-YYYY h:mm:ss");
  result.updatedAt = dayjs(updatedAt).format("DD-MM-YYYY h:mm:ss");

  return result;
};

export { formatDate };
