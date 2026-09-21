import Fastify from 'fastify';
import cors from "@fastify/cors";
import swaggerPlugin from "./plugins/swagger.js";
import routes from "./routes/index.js"

const app = Fastify({
  logger: true,
  schemaErrorFormatter: () => new Error("Invalid data."),
});

await app.register(cors, {origin: true})
await app.register(swaggerPlugin)
await app.register(routes)

export default app
