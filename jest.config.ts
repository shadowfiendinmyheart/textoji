import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  verbose: true,
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
  collectCoverageFrom: ["src/**/*.ts", "!**/node_modules/**"],
};

export default config;
