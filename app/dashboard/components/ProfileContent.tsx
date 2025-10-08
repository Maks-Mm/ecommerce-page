// components/ProfileContent/ProfileContent.tsx
'use client';

import { useProfile } from '@/hooks/useProfile';
import { useState } from 'react';

export default function ProfileContent() {
  const { profile, loading, error, isUsingBackend, updateProfile } = useProfile();
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    name: '',
    bio: '',
    location: '',
    website: ''
  });

  // Start editing
  const handleEditStart = () => {
    setIsEditing(true);
    setEditData({
      name: profile.name,
      bio: profile.bio,
      location: profile.location,
      website: profile.website
    });
  };

  // Cancel editing
  const handleEditCancel = () => {
    setIsEditing(false);
  };

  // Save changes
  const handleSave = async () => {
    await updateProfile(editData);
    setIsEditing(false);
  };

  // Handle input changes
  const handleInputChange = (field: string, value: string) => {
    setEditData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-8">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      {/* Connection Status - SIMPLIFIED */}
      <div className={`mb-4 p-3 rounded ${
        isUsingBackend 
          ? 'bg-green-100 text-green-800' 
          : 'bg-yellow-100 text-yellow-800'
      }`}>
        <span className="font-medium">
          {isUsingBackend ? '✅ Backend Connected' : '⚠️ Using Demo Data'}
        </span>
      </div>

      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
          {error}
        </div>
      )}

      {/* SIMPLIFIED PROFILE CARD */}
      <div className="bg-white rounded-lg shadow p-6">
        
        {/* Header with Edit Button */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {profile.name}
            </h1>
            {profile.isVerified && (
              <span className="text-blue-500 text-sm">✓ Verified</span>
            )}
          </div>
          <button
            onClick={handleEditStart}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Edit Profile
          </button>
        </div>

        {/* Edit Form */}
        {isEditing && (
          <div className="mb-6 p-4 bg-blue-50 rounded">
            <h3 className="text-lg font-semibold mb-3">Edit Profile</h3>
            <div className="space-y-3">
              <input
                type="text"
                value={editData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="Name"
                className="w-full p-2 border rounded"
              />
              <input
                type="text"
                value={editData.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
                placeholder="Location"
                className="w-full p-2 border rounded"
              />
              <input
                type="text"
                value={editData.website}
                onChange={(e) => handleInputChange('website', e.target.value)}
                placeholder="Website"
                className="w-full p-2 border rounded"
              />
              <textarea
                value={editData.bio}
                onChange={(e) => handleInputChange('bio', e.target.value)}
                placeholder="Bio"
                rows={3}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="flex gap-2 mt-3">
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Save
              </button>
              <button
                onClick={handleEditCancel}
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* Profile Information - SIMPLE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          
          {/* Left Column - Basic Info */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Basic Information</h3>
              <div className="space-y-2">
                <p><strong>Email:</strong> {profile.email}</p>
                <p><strong>Bio:</strong> {profile.bio}</p>
                <p><strong>Location:</strong> {profile.location}</p>
                <p><strong>Website:</strong> {profile.website}</p>
                <p><strong>Joined:</strong> {profile.joinDate}</p>
              </div>
            </div>

            {/* Stats */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Statistics</h3>
              <div className="flex gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">{profile.posts}</div>
                  <div className="text-sm text-gray-600">Posts</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{profile.followers}</div>
                  <div className="text-sm text-gray-600">Followers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{profile.following}</div>
                  <div className="text-sm text-gray-600">Following</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Skills & Social */}
          <div className="space-y-4">
            {/* Skills */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {profile.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Social Links</h3>
              <div className="space-y-2">
                {Object.entries(profile.socialLinks).map(([platform, username]) => (
                  <div key={platform} className="flex items-center">
                    <span className="capitalize font-medium w-20">{platform}:</span>
                    <span className="text-blue-600">@{username}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Images Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Profile Picture</h3>
            <img
              src={profile.avatar}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-gray-200"
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Cover Image</h3>
            <img
              src={profile.coverImage}
              alt="Cover"
              className="w-full h-32 object-cover rounded border"
            />
          </div>
        </div>

        {/* Test Buttons */}
        <div className="border-t pt-4">
          <h3 className="text-lg font-semibold mb-3">Test Functions</h3>
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => updateProfile({ 
                bio: `Updated at ${new Date().toLocaleTimeString()}` 
              })}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Update Bio
            </button>
            <button
              onClick={() => updateProfile({
                followers: profile.followers + 1
              })}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              +1 Follower
            </button>
            <button
              onClick={() => updateProfile({
                skills: [...profile.skills, `Skill-${Date.now()}`]
              })}
              className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
            >
              Add Skill
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}