import type { Config } from "drizzle-kit";

import { env } from "@/env";

// This is experimental.
// If this error is thrown, it means that LOCAL_DB_PATH was not set by `with-local-db` script
// For instance: You won't be able to use `db:push:local` and `db:migrate:local` scripts
// If this fails for you, just use `db:generate` and `d1:migrate:local` scripts
if (!env.LOCAL_DB_PATH) {
  throw new Error("LOCAL_DB_PATH is required, path to local sqlite database");
}

export default {
  schema: "./src/server/db/schema.ts",
  out: "./migrations",
  dialect: "sqlite",
  dbCredentials: {
    url: `file:${env.LOCAL_DB_PATH}`,
  },
  tablesFilter: ["<REPLACE_ME>_*"],
} satisfies Config;
