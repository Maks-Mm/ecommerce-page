// components/ProfileContent/ProfileContentSimple.tsx (TEMPORARY FIX)
'use client';

import { useProfile } from '@/hooks/useProfile';

// Temporary interface definition
interface UserProfile {
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

export default function ProfileContentSimple() {
  const { profile, loading, error, isUsingBackend, updateProfile } = useProfile();

  if (loading) {
    return <div>Loading profile...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Your existing JSX */}
      <div className="flex gap-4 mt-4">
        <span>{profile.posts} Posts</span>
        <span>{profile.followers} Followers</span> {/* This should work now */}
        <span>{profile.following} Following</span>
      </div>
      {/* ... rest of your component */}
    </div>
  );
}