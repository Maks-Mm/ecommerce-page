// types/profile.ts
export interface UserProfile {
  id: number;
  name: string;
  email: string;
  avatar: string;
  bio: string;
  followers: number;
  following: number;
  posts: number;
  skills: string[];
  coverImage: string;
  location: string;
  website: string;
  joinDate: string;
  isVerified: boolean;
  isFollowing: boolean;
  socialLinks: {
    twitter: string;
    github: string;
    linkedin: string;
    instagram: string;
  };
}

export type ProfileUpdateData = Partial<Omit<UserProfile, 'id' | 'email' | 'joinDate'>>;

export const fallbackProfile: UserProfile = {
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