import path from "path";
import dotenv from "dotenv";

dotenv.config({
  path: path.resolve(__dirname, `../../.${process.env.NODE_ENV}.env`),
});

interface ENV {
  API_ID: string | undefined;
  API_HASH: string | undefined;
  STRING_SESSION: string | undefined;
}

interface Config {
  API_ID: string;
  API_HASH: string;
  STRING_SESSION: string;
}

const getConfig = (): ENV => {
  return {
    API_ID: process.env.API_ID,
    API_HASH: process.env.API_HASH,
    STRING_SESSION: process.env.STRING_SESSION,
  };
};

const getSanitizedConfig = (config: ENV): Config => {
  for (const [key, value] of Object.entries(config)) {
    if (value === undefined) {
      throw new Error(`Missing key ${key} in config.env`);
    }
  }
  return config as unknown as Config;
};

const config = getConfig();

export const sanitizedConfig = getSanitizedConfig(config);
