import dotenv from "dotenv";
dotenv.config();

const config = {
  DB_PASS: process.env.DB_PASS,
  DB_USER: process.env.DB_USER,

  PORT: process.env.PORT ?? 5000,
  CORS_ORIGIN: process.env.CORS_ORIGIN ?? "*",
  JWT_SECRET: process.env.JWT_SECRET ?? "secret",

  HR_BE_BASE_URL: process.env.HR_BE_BASE_URL ?? "http://localhost:4000",
  // HR_FE_BASE_URL: process.env.HR_FE_BASE_URL ?? "http://localhost:4001",
  HR_FE_BASE_URL: "https://hr-bento.vercel.app",

  INVENTORY_BE_BASE_URL: process.env.INVENTORY_BE_BASE_URL ?? "http://localhost:4010",
  INVENTORY_FE_BASE_URL: process.env.INVENTORY_FE_BASE_URL ?? "http://localhost:4011", // Auth done

  KDS_BE_BASE_URL: process.env.KDS_BE_BASE_URL ?? "http://localhost:4020", // Auth done
  KDS_FE_BASE_URL: process.env.KDS_FE_BASE_URL ?? "http://localhost:4021", // Auth done

  POS_BE_BASE_URL: process.env.POS_BE_BASE_URL ?? "http://localhost:4030", // Auth done
  POS_FE_BASE_URL: process.env.POS_FE_BASE_URL ?? "http://localhost:4031", // Auth done

  MARKETPLACE_BE_BASE_URL: process.env.MARKETPLACE_BE_BASE_URL ?? "http://localhost:4040",
  MARKETPLACE_FE_BASE_URL: process.env.MARKETPLACE_FE_BASE_URL ?? "http://localhost:4041",

  MENU_BE_BASE_URL: process.env.MENU_BE_BASE_URL ?? "http://localhost:4050",
  MENU_FE_BASE_URL: process.env.MENU_FE_BASE_URL ?? "http://localhost:4051",

  REVIEW_BE_BASE_URL: process.env.REVIEW_BE_BASE_URL ?? "http://localhost:4060",
  REVIEW_FE_BASE_URL: process.env.REVIEW_FE_BASE_URL ?? "http://localhost:4061",
};

export default config;
