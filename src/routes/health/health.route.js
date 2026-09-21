import { healthSchema } from "./health.schema.js"

export const healthRoute = (app) => {
  app.get("/health", { schema: healthSchema }, async () => {
    return {
      status: "server on"
    }
  })
}
