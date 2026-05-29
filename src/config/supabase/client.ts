
// Carrega variáveis de ambiente antes de criar o client
import dotenv from "dotenv";
if (process.env.NODE_ENV === "test") {
  dotenv.config({ path: ".env.test" });
} else {
  dotenv.config();
}

import { createClient } from "@supabase/supabase-js";

export const supabase =
  createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SECRET_KEY!
  );