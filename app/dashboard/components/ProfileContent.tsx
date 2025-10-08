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

  // Follow/Unfollow functionality
  const handleFollowToggle = async () => {
    await updateProfile({
      isFollowing: !profile.isFollowing,
      followers: profile.isFollowing ? profile.followers - 1 : profile.followers + 1
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-8">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Connection Status */}
      <div className={`mb-6 p-4 rounded-lg ${
        isUsingBackend 
          ? 'bg-green-100 border border-green-400 text-green-700' 
          : 'bg-yellow-100 border border-yellow-400 text-yellow-700'
      }`}>
        <div className="flex items-center">
          <span className="mr-2">•</span>
          <span className="font-medium">
            {isUsingBackend ? 'Connected to Backend' : 'Using Demo Data'}
          </span>
        </div>
        <p className="text-sm mt-1">
          {isUsingBackend 
            ? 'Profile changes are saved permanently' 
            : 'Profile changes are temporary (reset on refresh)'}
        </p>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
          {error}
        </div>
      )}

      {/* Profile Card */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Cover Image */}
        <div className="h-48 bg-gray-200 relative">
          <img 
            src={profile.coverImage} 
            alt="Cover" 
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4">
            <button
              onClick={handleEditStart}
              className="bg-white bg-opacity-90 px-4 py-2 rounded-lg shadow hover:bg-opacity-100 transition-all"
            >
              ✏️ Edit Profile
            </button>
          </div>
        </div>

        {/* Edit Form */}
        {isEditing && (
          <div className="p-6 bg-blue-50 border-b">
            <h3 className="text-lg font-semibold mb-4">Edit Profile</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  value={editData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <input
                  type="text"
                  value={editData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Website</label>
                <input
                  type="text"
                  value={editData.website}
                  onChange={(e) => handleInputChange('website', e.target.value)}
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                <textarea
                  value={editData.bio}
                  onChange={(e) => handleInputChange('bio', e.target.value)}
                  rows={3}
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            <div className="flex gap-2 mt-4">
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
              >
                💾 Save Changes
              </button>
              <button
                onClick={handleEditCancel}
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
              >
                ❌ Cancel
              </button>
            </div>
          </div>
        )}

        {/* Profile Info */}
        <div className="px-6 pb-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center -mt-16">
            {/* Avatar */}
            <div className="relative">
              <img
                src={profile.avatar}
                alt={profile.name}
                className="w-32 h-32 rounded-full border-4 border-white object-cover"
              />
              {profile.isVerified && (
                <div className="absolute bottom-2 right-2 bg-blue-500 rounded-full p-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
            
            {/* Profile Details */}
            <div className="mt-4 sm:mt-0 sm:ml-6 flex-1">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center">
                    <h1 className="text-2xl font-bold text-gray-900">
                      {profile.name}
                    </h1>
                  </div>
                  
                  <p className="text-gray-600 mt-2">{profile.bio}</p>
                  
                  <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-500">
                    <span className="flex items-center">
                      📍 {profile.location}
                    </span>
                    <span className="flex items-center">
                      🌐 {profile.website}
                    </span>
                    <span className="flex items-center">
                      📅 Joined {profile.joinDate}
                    </span>
                    <span className="flex items-center">
                      📧 {profile.email}
                    </span>
                  </div>
                </div>

                {/* Follow Button */}
                <button
                  onClick={handleFollowToggle}
                  className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                    profile.isFollowing
                      ? 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                      : 'bg-blue-500 text-white hover:bg-blue-600'
                  }`}
                >
                  {profile.isFollowing ? 'Following' : 'Follow'}
                </button>
              </div>

              {/* Stats */}
              <div className="flex gap-6 mt-6">
                <div className="text-center">
                  <div className="font-bold text-gray-900 text-xl">{profile.posts}</div>
                  <div className="text-sm text-gray-500">Posts</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-gray-900 text-xl">
                    {profile.followers.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-500">Followers</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-gray-900 text-xl">{profile.following}</div>
                  <div className="text-sm text-gray-500">Following</div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Skills & Expertise</h3>
            <div className="flex flex-wrap gap-2">
              {profile.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Social Links Section */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Connect</h3>
            <div className="flex gap-4">
              {Object.entries(profile.socialLinks).map(([platform, username]) => (
                <a
                  key={platform}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    alert(`Navigating to ${platform}: ${username}`);
                  }}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <span className="capitalize">{platform}</span>
                  <span>·</span>
                  <span className="text-blue-500">@{username}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Test Update Button */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex gap-4">
              <button
                onClick={() => updateProfile({ 
                  bio: `Updated at ${new Date().toLocaleTimeString()} - ${isUsingBackend ? 'Backend' : 'Local'} mode` 
                })}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                🔄 Update Bio (Test)
              </button>
              
              <button
                onClick={() => updateProfile({
                  skills: [...profile.skills, `New Skill ${Date.now()}`]
                })}
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
              >
                ➕ Add Skill (Test)
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}