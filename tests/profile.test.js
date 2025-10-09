// tests/profile.test.js
const request = require("supertest");
const createServer = require("../server");

let app;

beforeAll(async () => {
  app = await createServer();
});

describe("Profile API", () => {
  it("should return profile data", async () => {
    const res = await request(app).get("/api/profile");
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("name");
  });

  it("should update profile bio", async () => {
    const res = await request(app)
      .put("/api/profile")
      .send({ bio: "Test bio" });
    expect(res.statusCode).toBe(200);
    expect(res.body.userProfile.bio).toBe("Test bio");
  });
});
