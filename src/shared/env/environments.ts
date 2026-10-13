import "dotenv/config"
import { z } from "zod"
const envschema = z.object({
    PORT: z.coerce.number().default(3333), 
    DB_FILE: z.string(),
})       
const _env = envschema.safeParse(process.env)  
if (!_env.success)  throw new Error("Invalid environment variables")
    export const env = _env.data
