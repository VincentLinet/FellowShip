import { getMasters as mGetMasters } from "../models/user";

export const getMasters = async ({ params }, res, next) => {
  const { theme, city } = params;
  const masters = await mGetMasters({ city });
  res.send(masters);
};
