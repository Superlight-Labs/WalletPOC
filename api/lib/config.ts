interface Config {
  databaseUrl: string;
  cookieSecret: string;
  ethereumAddressPath: string;
}

const config: Config = {
  databaseUrl: process.env.MAIN_DB_URL || "",
  cookieSecret: process.env.COOKIE_SECRET || "",
  ethereumAddressPath: process.env.ETHEREUM_ADDRESS_PATH || "",
};

export default config;
