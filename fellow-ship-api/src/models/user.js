import { sql } from "../services/database";

export const getMasters = ({ city, theme, ruleset }) =>
  sql`SELECT * FROM user WHERE role=1`
    .append(city ? ` AND city='${city}'` : "")
    .append(theme ? ` AND theme='${theme}'` : "")
    .append(ruleset ? ` AND ruleset='${ruleset}'` : "")
    .execute();
