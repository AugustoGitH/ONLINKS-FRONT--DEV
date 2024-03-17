import * as z from "zod";
import { createLinkPageSchema } from ".";

export interface CreateLinkPageSchema
  extends z.infer<typeof createLinkPageSchema> {}
