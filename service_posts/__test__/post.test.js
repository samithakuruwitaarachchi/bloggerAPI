const request = require('supertest')
const app = require('../postsService')

describe('Post Service', () => {

    describe("Create Post", () => {
        test("Response with 201", async () =>{
            const response = await request(app).post("/posts/create").send({
                "title":"POST UNIT TEST",
                "content":"Unit test is running",
                "authorID":"648ddb3a195700d2c3b4c9d4",
                "createDate":"2023/06/18"
            })
            .set("authorization", "baarer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OGRkYjNhMTk1NzAwZDJjM2I0YzlkMSIsIm5hbWUiOiJzYW1pdGhhMSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY4NzAzNTk0Nn0.bCl4FcBPKtXbXJVF5f2SRGmjJalmZq2Pu_EdPcnz5cg")

            expect(response.status).toBe(201)
        })
    })

    describe("Create post with missing values", () => {
        test("Response with 400", async () => {
            const response = await request(app).post("/posts/create").send({
                "title":"",
                "content":"Unit test is running",
                "authorID":"",
                "createDate":"2023/06/18"
            })
            .set("authorization", "baarer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OGRkYjNhMTk1NzAwZDJjM2I0YzlkMSIsIm5hbWUiOiJzYW1pdGhhMSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY4NzAzNTk0Nn0.bCl4FcBPKtXbXJVF5f2SRGmjJalmZq2Pu_EdPcnz5cg")

            expect(response.status).toBe(400)
        })
    })

    describe("Create post with missing keys", () => {
        test("Response with 400", async () => {
            const response = await request(app).post("/posts/create").send({
                "content":"Unit test is running",
                "authorID":"",
                "createDate":"2023/06/18"
            })
            .set("authorization", "baarer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OGRkYjNhMTk1NzAwZDJjM2I0YzlkMSIsIm5hbWUiOiJzYW1pdGhhMSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY4NzAzNTk0Nn0.bCl4FcBPKtXbXJVF5f2SRGmjJalmZq2Pu_EdPcnz5cg")

            expect(response.status).toBe(400)
        })
    })


    describe("Get All Posts", () => {
        test("Response with 201", async () =>{
            const response = await request(app).get("/posts/all")
            .send()
            .set("authorization", "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OGRkYjNhMTk1NzAwZDJjM2I0YzlkMSIsIm5hbWUiOiJzYW1pdGhhMSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY4NzAzNTk0Nn0.bCl4FcBPKtXbXJVF5f2SRGmjJalmZq2Pu_EdPcnz5cg")

            expect(response.status).toBe(201)
        })
    })

    describe("Get Posts by Author", () => {
        test("Response with 201", async () =>{
            const response = await request(app).get("/posts/648ddb3a195700d2c3b4c9d1")
            .send()
            .set("authorization", "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OGRkYjNhMTk1NzAwZDJjM2I0YzlkMSIsIm5hbWUiOiJzYW1pdGhhMSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY4NzAzNTk0Nn0.bCl4FcBPKtXbXJVF5f2SRGmjJalmZq2Pu_EdPcnz5cg")

            expect(response.status).toBe(201)
        })
    })

    describe("Delete Posts by id", () => {
        test("Response with 200", async () =>{
            const response = await request(app).delete("/posts/delete/648e032e8498487fa44d0a2d")
            .send()
            .set("authorization", "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OGRkYjNhMTk1NzAwZDJjM2I0YzlkMSIsIm5hbWUiOiJzYW1pdGhhMSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY4NzAzNTk0Nn0.bCl4FcBPKtXbXJVF5f2SRGmjJalmZq2Pu_EdPcnz5cg")

            expect(response.status).toBe(200)
        })
    })

    describe("Update Posts by id", () => {
        test("Response with 200", async () =>{
            const response = await request(app).patch("/posts/648ea2efce7ea0e05b83878d/update")
            .send({
                "title":"Updated via UT",
                "content":"UT in progress"
            })
            .set("authorization", "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OGRkYjNhMTk1NzAwZDJjM2I0YzlkMSIsIm5hbWUiOiJzYW1pdGhhMSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY4NzAzNTk0Nn0.bCl4FcBPKtXbXJVF5f2SRGmjJalmZq2Pu_EdPcnz5cg")

            expect(response.status).toBe(200)
        })
    })

    

})