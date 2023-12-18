import * as z from "zod";
import { loginSchema } from ".";

export interface LoginForm extends z.infer<typeof loginSchema> {}
