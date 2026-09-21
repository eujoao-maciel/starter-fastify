import app from "./app.js"

const startServer = async () => {
  try {
    await app.listen({
      port: Number(process.env.PORT) || 3000,
      host: process.env.HOST
    })

    console.log("server running")
  } catch (error) {
    app.log.error()
    process.exit(1)
  }
}

startServer()

