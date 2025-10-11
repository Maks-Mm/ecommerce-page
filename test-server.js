const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs").promises;
const path = require("path");

// Test-specific data file
const TEST_DATA_FILE = path.join(__dirname, 'test-userProfile.json');

// Default user profile for testing
const defaultUserProfile = {
  id: 1,
  name: "Alex Johnson",
  email: "alex.johnson@example.com",
  avatar: "https://www.shutterstock.com/image-vector/blank-image-placeholder-profile-picture-260nw-1923893873.jpg",
  bio: "Frontend developer passionate about React.",
  followers: 1248,
  following: 342,
  posts: 178,
  skills: ["React", "TypeScript", "Next.js"],
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

// Load user profile from file
const loadUserProfile = async () => {
  try {
    const data = await fs.readFile(TEST_DATA_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    // Return default if file doesn't exist
    return { ...defaultUserProfile };
  }
};

// Save user profile to file
const saveUserProfile = async (profile) => {
  try {
    await fs.writeFile(TEST_DATA_FILE, JSON.stringify(profile, null, 2));
    return true;
  } catch (error) {
    console.error('Error saving user profile:', error);
    return false;
  }
};

function createTestServer() {
  const app = express();
  app.use(bodyParser.json({ limit: '10mb' }));

  // In-memory profile for testing (no file I/O during tests)
  let userProfile = { ...defaultUserProfile };

  // ✅ Get profile
  app.get("/api/profile", async (req, res) => {
    try {
      res.json(userProfile);
    } catch (error) {
      console.error('Error fetching profile:', error);
      res.status(500).json({ error: "Failed to load profile" });
    }
  });

  // ✅ Update profile
  app.put("/api/profile", async (req, res) => {
    try {
      // Merge existing profile with incoming updates
      userProfile = { ...userProfile, ...req.body, id: 1 };
      
      res.json({ 
        success: true, 
        message: "Profile updated successfully",
        userProfile 
      });
    } catch (error) {
      console.error('Error updating profile:', error);
      res.status(500).json({ 
        success: false, 
        error: error.message 
      });
    }
  });

  // ✅ Reset profile to defaults
  app.post("/api/profile/reset", async (req, res) => {
    try {
      userProfile = { ...defaultUserProfile };
      
      res.json({ 
        success: true, 
        message: "Profile reset to defaults",
        userProfile 
      });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        error: error.message 
      });
    }
  });

  return app;
}

module.exports = createTestServer;