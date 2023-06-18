const request = require('supertest')
const app = require('../blogservice')

describe("User Service", () => {

  describe("Create User", () => {
      test("Response with 201", async () => {
          const response = await request(app).post("/users/create").send({
              "name":"Test User",
              "email":"testUser@gmail.com",
              "password":"123456789",
              "role":"admin"
          })
          expect(response.status).toBe(201)
      })
  })

  describe("Login with created user", () => {
    test("respond with 201", async ()=> {
      const response = await request(app).post("/users/auth").send({
        "email":"testUser@gmail.com",
        "password":"123456789"
      })
      expect(response.status).toBe(201)
    })
  })

  describe("Recieved token with login", () => {
    test("respond with 201", async ()=> {
      const response = await request(app).post("/users/auth").send({
        "email":"testUser@gmail.com",
        "password":"123456789"
      })
      expect(response.body.data).toBeDefined()
    })
  })

})

describe("Authentication", () => {

    describe("when passed a email and password", () => {
      test("respond with 201", async ()=> {
        const response = await request(app).post("/users/auth").send({
          "email":"samitha1@gmail.com",
          "password":"123456789"
        })
        expect(response.status).toBe(201)
      })
    })

    describe("when missing password", () => {
      test("respond with 403", async () => {
        const response = await request(app).post("/users/auth").send({
          "email":"samitha1@gmail.com",
          "password":""
        })
        expect(response.status).toBe(403)
      })
    })

    describe("when missing email", () => {
      test("respond with 403", async () => {
        const response = await request(app).post("/users/auth").send({
          "email":"",
          "password":"123456787"
        })
        expect(response.status).toBe(403)
      })
    })

    describe("when missing email & password", () => {
      test("respond with 403", async () => {
        const response = await request(app).post("/users/auth").send({
          "email":"",
          "password":""
        })
        expect(response.status).toBe(403)
      })
    })


    
})
