import { describe, expect, it, afterAll } from "vitest"
import app from "../../app.js" 

describe("health route", () => {
  it("should return status 'server on'", async () => {
    const response = await app.inject({
      method: "GET",
      url: "/health"
    })

    expect(response.statusCode).toBe(200)
    expect(JSON.parse(response.payload)).toEqual({
      status: "server on"
    })
  })
})

afterAll(async () => {
  await app.close()
})
