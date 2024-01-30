import { z } from "zod";

const privateConfigSchema = z.object({
  VITE_CAT_API_KEY: z.string(),
});

export const privateConfig = privateConfigSchema.parse(import.meta.env);
