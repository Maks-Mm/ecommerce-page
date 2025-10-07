const express = require("express");
const next = require("next");
const bodyParser = require("body-parser");
const fs = require("fs").promises;
const path = require("path");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

// File path for persistent storage
const DATA_FILE = path.join(__dirname, 'userProfile.json');

// Default user profile structure
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
    const data = await fs.readFile(DATA_FILE, 'utf8');
    const profile = JSON.parse(data);
    
    // Merge with default to ensure all fields exist
    return { ...defaultUserProfile, ...profile };
  } catch (error) {
    if (error.code === 'ENOENT') {
      // File doesn't exist, create with default data
      console.log('📁 Creating new profile data file...');
      await saveUserProfile(defaultUserProfile);
      return defaultUserProfile;
    }
    console.error('❌ Error loading user profile:', error);
    return defaultUserProfile;
  }
};

// Save user profile to file
const saveUserProfile = async (profile) => {
  try {
    await fs.writeFile(DATA_FILE, JSON.stringify(profile, null, 2));
    console.log('💾 Profile saved successfully');
    return true;
  } catch (error) {
    console.error('❌ Error saving user profile:', error);
    return false;
  }
};

app.prepare().then(async () => {
  const server = express();

  server.use(bodyParser.json({ limit: '10mb' }));

  // Initialize user profile
  let userProfile = await loadUserProfile();

  // ✅ Get profile
  server.get("/api/profile", async (req, res) => {
    try {
      // Always load fresh data from file
      userProfile = await loadUserProfile();
      res.json(userProfile);
    } catch (error) {
      console.error('Error fetching profile:', error);
      res.status(500).json({ error: "Failed to load profile" });
    }
  });

  // ✅ Update profile
  server.put("/api/profile", async (req, res) => {
    try {
      // Merge existing profile with incoming updates
      userProfile = { ...userProfile, ...req.body, id: 1 }; // Ensure ID remains constant
      
      // Save to persistent storage
      const success = await saveUserProfile(userProfile);
      
      if (success) {
        res.json({ 
          success: true, 
          message: "Profile updated successfully",
          userProfile 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          error: "Failed to save profile to disk" 
        });
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      res.status(500).json({ 
        success: false, 
        error: error.message 
      });
    }
  });

  // ✅ Reset profile to defaults
  server.post("/api/profile/reset", async (req, res) => {
    try {
      userProfile = { ...defaultUserProfile };
      await saveUserProfile(userProfile);
      
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

  // Catch all other routes
  server.all("*", (req, res) => {
    return handle(req, res);
  });

  const PORT = process.env.PORT || 3000;
  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`🚀 Server ready at http://localhost:${PORT}`);
    console.log(`💾 Profile data stored in: ${DATA_FILE}`);
  });
});