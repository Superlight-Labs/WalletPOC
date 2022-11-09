import { config as loadConfig } from "dotenv";

interface Config {
  databaseUrl: string;
  cookieSecret: string;
  ethereumAddressPath: string;
}

const initConfig = (): Config => {
  loadConfig();

  return {
    databaseUrl: process.env.MAIN_DB_URL || "",
    cookieSecret: process.env.COOKIE_SECRET || "",
    ethereumAddressPath: process.env.ETHEREUM_ADDRESS_PATH || "",
  };
};

const config = initConfig();

export default config;
