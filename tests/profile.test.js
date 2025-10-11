const request = require("supertest");
const createTestServer = require("../test-server");

let server;

beforeAll(() => {
  server = createTestServer();
});

afterAll(() => {
  // Clean up if needed
});

describe("Profile API", () => {
  it("should return profile data", async () => {
    const res = await request(server).get("/api/profile");
    
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("name");
    expect(res.body).toHaveProperty("email");
    expect(res.body).toHaveProperty("bio");
    expect(res.body.name).toBe("Alex Johnson");
    expect(res.body.bio).toBe("Frontend developer passionate about React.");
  });

  it("should update profile bio", async () => {
    const newBio = "Updated test bio for Jest testing";
    const res = await request(server)
      .put("/api/profile")
      .send({ bio: newBio });
    
    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.userProfile.bio).toBe(newBio);
    expect(res.body.message).toBe("Profile updated successfully");
  });

  it("should update multiple profile fields", async () => {
    const updates = {
      name: "Test User",
      location: "Test City",
      bio: "Test bio description"
    };

    const res = await request(server)
      .put("/api/profile")
      .send(updates);
    
    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.userProfile.name).toBe(updates.name);
    expect(res.body.userProfile.location).toBe(updates.location);
    expect(res.body.userProfile.bio).toBe(updates.bio);
  });

  it("should reset profile to defaults", async () => {
    const res = await request(server)
      .post("/api/profile/reset");
    
    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.userProfile.bio).toBe("Frontend developer passionate about React.");
    expect(res.body.userProfile.name).toBe("Alex Johnson");
  });
});