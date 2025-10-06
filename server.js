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

  // Enhanced mock DB with additional fields
  let userProfile = {
    id: 1,
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    avatar: "https://www.shutterstock.com/image-vector/blank-image-placeholder-profile-picture-260nw-1923893873.jpg",
    bio: "Frontend developer passionate about React.",
    followers: 1248,
    following: 342,
    posts: 178,
    skills: ["React", "TypeScript", "Next.js"],
    // Additional fields for enhanced profile
    coverImage: "https://media.istockphoto.com/id/2148169735/photo/woman-hiking-through-the-meadow-in-swiss-alps-in-morning.webp?a=1&b=1&s=612x612&w=0&k=20&c=u1AjftqJefF228xLO4hcEhsDebCG0vTBWr9IdkSPlPI=",
    location: "San Francisco, CA",
    website: "alexjohnson.dev",
    joinDate: "January 2020",
    isVerified: true,
    isFollowing: false,
    socialLinks: {
      twitter: "alexjohnson",
      github: "alexjohnson",
      linkedin: "alexjohnson",
      instagram: "alexjohnson"
    }
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