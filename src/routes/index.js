import { healthRoute } from "./health/health.route.js"

const routes = async (app) => {
    await app.register(healthRoute)
}

export default routes
