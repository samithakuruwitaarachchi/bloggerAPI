const request = require('supertest')
const app = require('../commentService')

describe("Create Service", () =>{

    describe("Create Comment", () => {
        test("Response with 201", async () => {
            const response = await request(app).post("/comments/648e032e8498487fa44d0a2d/comment/create").send({
                "content":"UT COMMENT",
                "authorID":"648ddb3a195700d2c3b4c9d1",
                "postID":"648e032e8498487fa44d0a2d",
                "createDate":"18/06/2023"
            })
            .set("authorization", "baerer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OGRkYjNhMTk1NzAwZDJjM2I0YzlkMSIsIm5hbWUiOiJzYW1pdGhhMSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY4NzAzNTk0Nn0.bCl4FcBPKtXbXJVF5f2SRGmjJalmZq2Pu_EdPcnz5cg")

            expect(response.status).toBe(201)
        })
    })

    describe("Get Comments by post", () => {
        test("Response with 201", async () => {
            const response = await request(app)
            .get("/comments/648e032e8498487fa44d0a2d/all")
            .send({})
            .set("authorization", "baerer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OGRkYjNhMTk1NzAwZDJjM2I0YzlkMSIsIm5hbWUiOiJzYW1pdGhhMSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY4NzAzNTk0Nn0.bCl4FcBPKtXbXJVF5f2SRGmjJalmZq2Pu_EdPcnz5cg")

            expect(response.status).toBe(201)
        })
    })

    describe("Delete Comments by id", () => {
        test("Response with 200", async () => {
            const response = await request(app)
            .delete("/comments/delete/648ea7958bb00e61ad171576")
            .send({})
            .set("authorization", "baerer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OGRkYjNhMTk1NzAwZDJjM2I0YzlkMSIsIm5hbWUiOiJzYW1pdGhhMSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY4NzAzNTk0Nn0.bCl4FcBPKtXbXJVF5f2SRGmjJalmZq2Pu_EdPcnz5cg")

            expect(response.status).toBe(200)
        })
    })

    describe("Update Comments by id", () => {
        test("Response with 200", async () => {
            const response = await request(app)
            .patch("/comments/648e1a10c53471948d0ebe95/update")
            .send({
                "content":"UT update"
            })
            .set("authorization", "baerer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OGRkYjNhMTk1NzAwZDJjM2I0YzlkMSIsIm5hbWUiOiJzYW1pdGhhMSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY4NzAzNTk0Nn0.bCl4FcBPKtXbXJVF5f2SRGmjJalmZq2Pu_EdPcnz5cg")

            expect(response.status).toBe(200)
        })
    })

})