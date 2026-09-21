import fp from "fastify-plugin"
import swagger from "@fastify/swagger"
import swaggerUI from "@fastify/swagger-ui"

const swaggerPlugin = async (app) => {
    await app.register(swagger, {
        openapi: {
            info: {
                title: "starter-fastify-api",
                description:
                    "Production-ready REST API starter built with Node.js, Fastify, native Schema validation, Vitest, and Swagger.",
                version: "1.0.0",
            },
        },
    })

    await app.register(swaggerUI, {
        routePrefix: "/docs",
    })
}

export default fp(swaggerPlugin)
