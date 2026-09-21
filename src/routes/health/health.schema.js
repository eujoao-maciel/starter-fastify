export const healthSchema = {
    tags: ["Health"],
    summary: "Health Check",
    response: {
        200: {
            type: "object",
            properties: {
                status: {
                    type: "string",
                },
            },
        },
    },
}
