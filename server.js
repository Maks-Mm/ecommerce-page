// In your Express server (server.js)
const express = require("express");
const next = require("next");
const bodyParser = require("body-parser");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(bodyParser.json());

  // In-memory mock DB (replace with MongoDB or similar later)
  let userProfile = {
    id: 1,
    name: "Unknown User",
    email: "alex.johnson@example.com",
    avatar: "https://www.shutterstock.com/image-vector/blank-image-placeholder-profile-picture-260nw-1923893873.jpg",
    bio: "Frontend developer passionate about React.",
    followers: 1248,
    following: 342,
    posts: 178,
    skills: ["React", "TypeScript", "Next.js"]
  };

  // ✅ Get profile
  server.get("/api/profile", (req, res) => {
    res.json(userProfile);
  });

  // ✅ Update profile
  server.put("/api/profile", (req, res) => {
    userProfile = { ...userProfile, ...req.body };
    res.json({ success: true, userProfile });
  });

  // Catch all other routes
  server.all(/.*/, (req, res) => handle(req, res));

  const PORT = process.env.PORT || 3000;
  server.listen(PORT, () => console.log(`🚀 Server ready at http://localhost:${PORT}`));
});
