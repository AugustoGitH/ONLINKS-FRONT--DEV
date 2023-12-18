import * as z from "zod";
import { registerSchema } from ".";

export interface RegisterForm extends z.infer<typeof registerSchema> {}
