"use client";
import React, { useState } from 'react';

// User data type
interface User {
  id: number;
  name: string;
  email: string;
  avatar: string;
  coverImage: string;
  bio: string;
  location: string;
  website: string;
  joinDate: string;
  followers: number;
  following: number;
  posts: number;
}

// Mock user data
const mockUser: User = {
  id: 1,
  name: "Unknown User",
  email: "alex.johnson@example.com",
  avatar: "https://www.shutterstock.com/image-vector/blank-image-placeholder-profile-picture-260nw-1923893873.jpg",
  coverImage: "https://media.istockphoto.com/id/2148169735/photo/woman-hiking-through-the-meadow-in-swiss-alps-in-morning.webp?a=1&b=1&s=612x612&w=0&k=20&c=u1AjftqJefF228xLO4hcEhsDebCG0vTBWr9IdkSPlPI=",
  bio: "Frontend developer passionate about React and UX design. Love hiking and photography in my free time.",
  location: "San Francisco, CA",
  website: "alexjohnson.dev",
  joinDate: "January 2020",
  followers: 1248,
  following: 342,
  posts: 178
};

export default function ProfileContent() {
  const [user, setUser] = useState<User>(mockUser);
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({ ...user });

  const handleEditToggle = () => {
    if (isEditing) {
      // Save changes
      setUser(editForm);
    }
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEditForm({ ...editForm, [name]: value });
  };

  const handleFollow = () => {
    setUser(prev => ({
      ...prev,
      followers: prev.followers + (prev.followers === 1248 ? 1 : -1)
    }));
  };

  return (
    <div className="profile-content max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      {/* Cover Photo */}
      <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 relative">
        <img
          src={user.coverImage}
          alt="Cover"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 right-0 m-4">

        </div>
      </div>

      {/* Profile Header */}
      <div className="px-6 pb-6 relative">
        <div className="flex justify-between items-start mt-[-60px]">
          <div className="flex items-end">
            <div className="relative">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-32 h-32 rounded-full border-4 border-white object-cover"
              />
              <button
                className="absolute bottom-2 right-2 bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition-colors"
                onClick={() => {/* Add avatar change logic */ }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </button>
            </div>
            <div className="ml-6 mb-4">
              {isEditing ? (
                <input
                  type="text"
                  name="name"
                  value={editForm.name}
                  onChange={handleInputChange}
                  className="text-2xl font-bold bg-gray-100 rounded px-2 py-1 mb-1"
                />
              ) : (
                <h1 className="text-2xl font-bold">{user.name}</h1>
              )}

            </div>
          </div>

          <div className="flex space-x-3 mt-4">
            <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Bio and Details */}
        <div className="mt-6">
          {isEditing ? (
            <textarea
              name="bio"
              value={editForm.bio}
              onChange={handleInputChange}
              className="w-full bg-gray-100 rounded px-3 py-2 mb-3"
              rows={3}
              placeholder="Tell us about yourself"
            />
          ) : (
            <p className="text-gray-800 mb-3">{user.bio}</p>
          )}

          <div className="flex flex-wrap items-center text-gray-600 text-sm">
            {isEditing ? (
              <input
                type="text"
                name="location"
                value={editForm.location}
                onChange={handleInputChange}
                className="bg-gray-100 rounded px-2 py-1 mr-4 mb-2"
                placeholder="Location"
              />
            ) : (
              <span className="flex items-center mr-4 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {user.location}
              </span>
            )}

            {isEditing ? (
              <input
                type="text"
                name="website"
                value={editForm.website}
                onChange={handleInputChange}
                className="bg-gray-100 rounded px-2 py-1 mr-4 mb-2"
                placeholder="Website"
              />
            ) : (
              <span className="flex items-center mr-4 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                {user.website}
              </span>
            )}

            <span className="flex items-center mr-4 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Joined {user.joinDate}
            </span>
          </div>
        </div>

        {/* Stats */}
        <div className="flex border-t border-gray-200 mt-4 pt-4">
          <div className="mr-6 text-center">
            <span className="block font-bold text-lg">{user.posts}</span>
            <span className="text-gray-600 text-sm">Posts</span>
          </div>
          <div className="mr-6 text-center">
            <span className="block font-bold text-lg">{user.followers.toLocaleString()}</span>
            <span className="text-gray-600 text-sm">Followers</span>
          </div>
          <div className="text-center">
            <span className="block font-bold text-lg">{user.following}</span>
            <span className="text-gray-600 text-sm">Following</span>
          </div>
        </div>
      </div>

      {/* Additional Content Tabs */}
      <div className="border-t border-gray-200">
        <nav className="flex">
          <button className="px-6 py-3 border-b-2 border-blue-500 text-blue-500 font-medium">Posts</button>
          <button className="px-6 py-3 text-gray-600 hover:text-blue-500 font-medium">Media</button>
          <button className="px-6 py-3 text-gray-600 hover:text-blue-500 font-medium">Likes</button>
        </nav>
      </div>

      {/* Sample Post */}
      <div className="p-6 border-t border-gray-100">
        <div className="flex">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="ml-4 flex-1">
            <div className="flex items-center">
              <span className="font-semibold">{user.name}</span>
            </div>
            <p className="mt-1">Just launched my new portfolio website! Built with Next.js and Tailwind CSS. Check it out and let me know what you think! 🚀</p>
            <div className="flex mt-3 text-gray-500">
              <button className="flex items-center mr-6 hover:text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span>24</span>
              </button>
              <button className="flex items-center mr-6 hover:text-green-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                <span>42</span>
              </button>
              <button className="flex items-center hover:text-red-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span>127</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}