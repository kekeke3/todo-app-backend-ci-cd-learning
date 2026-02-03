const request = require("supertest");
const app = require("../app");

describe("Todo API", () => {
  it("creates a todo", async () => {
    const res = await request(app).post("/todos").send({ text: "Learn CI" });

    expect(res.statusCode).toBe(201);
    expect(res.body.text).toBe("BROKEN");
  });

  it("lists todos", async () => {
    const res = await request(app).get("/todos");

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

});
