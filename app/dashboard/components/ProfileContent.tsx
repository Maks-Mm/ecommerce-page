// components/ProfileContent/ProfileContent.tsx
'use client';

import { useProfile } from '@/hooks/useProfile';
import { useState } from 'react';

type ViewMode = 'basic' | 'detailed' | 'compact' | 'social';
type Theme = 'light' | 'dark' | 'blue' | 'professional';

// Define the social links structure that matches your backend
const defaultSocialLinks = {
  twitter: '',
  github: '', 
  linkedin: '',
  instagram: ''
};

export default function ProfileContent() {
  const { profile, loading, error, isUsingBackend, updateProfile } = useProfile();
  const [isEditing, setIsEditing] = useState(false);
  const [viewMode, setViewMode] = useState<ViewMode>('basic');
  const [theme, setTheme] = useState<Theme>('light');
  const [activeTab, setActiveTab] = useState<'profile' | 'activity' | 'settings' | 'media'>('profile');
  const [editData, setEditData] = useState({
    name: '',
    bio: '',
    location: '',
    website: '',
    skills: [] as string[],
    socialLinks: { ...defaultSocialLinks }
  });

  // Start editing
  const handleEditStart = () => {
    setIsEditing(true);
    setEditData({
      name: profile.name,
      bio: profile.bio,
      location: profile.location,
      website: profile.website,
      skills: [...profile.skills],
      socialLinks: { ...profile.socialLinks }
    });
  };

  // Cancel editing
  const handleEditCancel = () => {
    setIsEditing(false);
  };

  // Save changes
  const handleSave = async () => {
    try {
      await updateProfile(editData);
      setIsEditing(false);
    } catch (error) {
      console.error('Failed to save profile:', error);
    }
  };

  // Handle input changes for simple fields
  const handleInputChange = (field: string, value: string | string[]) => {
    setEditData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Handle social link changes - FIXED VERSION
  const handleSocialLinkChange = (platform: keyof typeof defaultSocialLinks, value: string) => {
    setEditData(prev => ({
      ...prev,
      socialLinks: {
        ...prev.socialLinks, // This is now guaranteed to exist
        [platform]: value
      }
    }));
  };

  // Add new skill
  const handleAddSkill = () => {
    const newSkill = prompt('Enter new skill:');
    if (newSkill && !editData.skills.includes(newSkill)) {
      setEditData(prev => ({
        ...prev,
        skills: [...prev.skills, newSkill]
      }));
    }
  };

  // Remove skill
  const handleRemoveSkill = (skillToRemove: string) => {
    setEditData(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill !== skillToRemove)
    }));
  };

  // Theme classes
  const themeClasses = {
    light: 'bg-gray-50 text-gray-900',
    dark: 'bg-gray-900 text-white',
    blue: 'bg-blue-50 text-blue-900',
    professional: 'bg-gray-100 text-gray-800'
  };

  const cardThemeClasses = {
    light: 'bg-white border-gray-200',
    dark: 'bg-gray-800 border-gray-700',
    blue: 'bg-blue-100 border-blue-200',
    professional: 'bg-white border-gray-300'
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-8">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen p-4 ${themeClasses[theme]}`}>
      
      {/* Header with Controls */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 gap-4">
        <div>
          <h1 className="text-3xl font-bold">Profile</h1>
          <p className="text-gray-600">Manage your profile settings</p>
        </div>
        
        {/* Controls */}
        <div className="flex flex-wrap gap-3">
          {/* View Mode Selector */}
          <select 
            value={viewMode}
            onChange={(e) => setViewMode(e.target.value as ViewMode)}
            className="px-3 py-2 border rounded bg-white"
          >
            <option value="basic">Basic View</option>
            <option value="detailed">Detailed View</option>
            <option value="compact">Compact View</option>
            <option value="social">Social View</option>
          </select>

          {/* Theme Selector */}
          <select 
            value={theme}
            onChange={(e) => setTheme(e.target.value as Theme)}
            className="px-3 py-2 border rounded bg-white"
          >
            <option value="light">Light Theme</option>
            <option value="dark">Dark Theme</option>
            <option value="blue">Blue Theme</option>
            <option value="professional">Professional</option>
          </select>

          {/* Edit Button */}
          <button
            onClick={handleEditStart}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Edit Profile
          </button>
        </div>
      </div>

      {/* Connection Status */}
      <div className={`mb-4 p-3 rounded ${
        isUsingBackend 
          ? 'bg-green-100 text-green-800' 
          : 'bg-yellow-100 text-yellow-800'
      }`}>
        <span className="font-medium">
          {isUsingBackend ? '✅ Backend Connected - Data is persistent' : '⚠️ Using Demo Data - Changes will reset'}
        </span>
      </div>

      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
          {error}
        </div>
      )}

      {/* Navigation Tabs */}
      <div className="flex border-b mb-6">
        {(['profile', 'activity', 'settings', 'media'] as const).map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 font-medium capitalize ${
              activeTab === tab 
                ? 'border-b-2 border-blue-500 text-blue-600' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className={`rounded-lg shadow p-6 ${cardThemeClasses[theme]}`}>
        
        {/* Edit Form */}
        {isEditing && (
          <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="text-lg font-semibold mb-3">Edit Profile</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  value={editData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Location</label>
                <input
                  type="text"
                  value={editData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Website</label>
                <input
                  type="text"
                  value={editData.website}
                  onChange={(e) => handleInputChange('website', e.target.value)}
                  className="w-full p-2 border rounded"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Bio</label>
              <textarea
                value={editData.bio}
                onChange={(e) => handleInputChange('bio', e.target.value)}
                rows={3}
                className="w-full p-2 border rounded"
              />
            </div>

            {/* Skills Editor */}
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-medium">Skills</label>
                <button
                  type="button"
                  onClick={handleAddSkill}
                  className="text-sm bg-green-500 text-white px-2 py-1 rounded"
                >
                  + Add Skill
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {editData.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {skill}
                    <button
                      type="button"
                      onClick={() => handleRemoveSkill(skill)}
                      className="text-red-500 hover:text-red-700"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>

            {/* Social Links Editor - FIXED */}
            <div className="mb-4">
              <h4 className="block text-sm font-medium mb-2">Social Links</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {Object.entries(defaultSocialLinks).map(([platform]) => (
                  <div key={platform} className="flex items-center gap-2">
                    <span className="capitalize font-medium w-20">{platform}:</span>
                    <input
                      type="text"
                      value={editData.socialLinks[platform as keyof typeof defaultSocialLinks]}
                      onChange={(e) => handleSocialLinkChange(
                        platform as keyof typeof defaultSocialLinks, 
                        e.target.value
                      )}
                      placeholder={`Your ${platform} username`}
                      className="flex-1 p-2 border rounded"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                {isUsingBackend ? 'Save to Backend' : 'Save Changes'}
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

        {/* Profile Content */}
        {activeTab === 'profile' && (
          <div className="space-y-6">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0">
                <img
                  src={profile.avatar}
                  alt="Profile"
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-gray-200"
                />
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h1 className="text-3xl font-bold mb-2">{profile.name}</h1>
                    {profile.isVerified && (
                      <span className="text-blue-500 text-sm">✓ Verified Profile</span>
                    )}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{profile.bio}</p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <span>📍 {profile.location}</span>
                  <span>🌐 {profile.website}</span>
                  <span>📅 Joined {profile.joinDate}</span>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{profile.posts}</div>
                <div className="text-sm text-gray-600">Posts</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">{profile.followers}</div>
                <div className="text-sm text-gray-600">Followers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">{profile.following}</div>
                <div className="text-sm text-gray-600">Following</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">{profile.skills.length}</div>
                <div className="text-sm text-gray-600">Skills</div>
              </div>
            </div>

            {/* Skills & Social Links */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Skills & Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  {profile.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-2 bg-blue-500 text-white rounded-lg text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Connect With Me</h3>
                <div className="space-y-2">
                  {Object.entries(profile.socialLinks).map(([platform, username]) => (
                    <div key={platform} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded">
                      <span className="capitalize font-medium w-20">{platform}</span>
                      <span className="text-blue-600 font-medium">@{username}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Activity Tab */}
        {activeTab === 'activity' && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Recent Activity</h3>
            <div className="space-y-3">
              {[1, 2, 3].map(item => (
                <div key={item} className="p-4 border rounded-lg hover:bg-gray-50">
                  <p className="text-gray-600">Activity item {item}</p>
                  <span className="text-sm text-gray-500">2 hours ago</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Profile Settings</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold">Display Options</h4>
                <div className="space-y-2">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" defaultChecked />
                    <span>Show email to public</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" defaultChecked />
                    <span>Show activity status</span>
                  </label>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold">Privacy Settings</h4>
                <div className="space-y-2">
                  <select className="w-full p-2 border rounded">
                    <option>Public - Anyone can see your profile</option>
                    <option>Private - Only followers can see</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Media Tab */}
        {activeTab === 'media' && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Profile Media</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Profile Picture</h4>
                <img
                  src={profile.avatar}
                  alt="Profile"
                  className="w-48 h-48 rounded-full object-cover border-4 border-gray-200 mx-auto"
                />
              </div>
              <div>
                <h4 className="font-semibold mb-2">Cover Image</h4>
                <img
                  src={profile.coverImage}
                  alt="Cover"
                  className="w-full h-48 object-cover rounded-lg border"
                />
              </div>
            </div>
          </div>
        )}

        {/* Quick Actions */}
        <div className="border-t pt-6 mt-6">
          <h3 className="text-lg font-semibold mb-3">Quick Actions</h3>
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