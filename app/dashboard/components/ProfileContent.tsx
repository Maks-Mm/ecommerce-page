"use client";
import React, { useState, useEffect } from 'react';

// Enhanced User data type
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
  isFollowing?: boolean;
}

// Mock user data
const defaultUser: User = {
  id: 1,
  name: "Alex Johnson",
  email: "alex.johnson@example.com",
  avatar: "https://www.shutterstock.com/image-vector/blank-image-placeholder-profile-picture-260nw-1923893873.jpg",
  coverImage: "https://media.istockphoto.com/id/2148169735/photo/woman-hiking-through-the-meadow-in-swiss-alps-in-morning.webp?a=1&b=1&s=612x612&w=0&k=20&c=u1AjftqJefF228xLO4hcEhsDebCG0vTBWr9IdkSPlPI=",
  bio: "Frontend developer passionate about React and UX design. Love hiking and photography in my free time.",
  location: "San Francisco, CA",
  website: "alexjohnson.dev",
  joinDate: "January 2020",
  followers: 1248,
  following: 342,
  posts: 178,
  isFollowing: false
};

export default function EnhancedProfileContent() {
  const [user, setUser] = useState<User>(defaultUser);
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({ ...defaultUser });
  const [loading, setLoading] = useState(false);
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'success' | 'error'>('idle');

  // Fetch user profile from server
  const fetchUserProfile = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/profile');
      
      if (!response.ok) {
        throw new Error('Failed to fetch profile');
      }
      
      const userData = await response.json();
      setUser(userData);
      setEditForm(userData);
    } catch (error) {
      console.error('Error fetching profile:', error);
      setSaveStatus('error');
      // Keep using default data on error
    } finally {
      setLoading(false);
    }
  };

  // Update user profile on server
  const updateUserProfile = async (updatedData: Partial<User>) => {
    try {
      setSaveStatus('saving');
      const response = await fetch('/api/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });

      if (!response.ok) {
        throw new Error('Failed to update profile');
      }

      const result = await response.json();
      setSaveStatus('success');
      setTimeout(() => setSaveStatus('idle'), 3000);
      return result.userProfile;
    } catch (error) {
      console.error('Error updating profile:', error);
      setSaveStatus('error');
      setTimeout(() => setSaveStatus('idle'), 3000);
      throw error;
    }
  };

  // Load profile on component mount
  useEffect(() => {
    fetchUserProfile();
  }, []);

  const handleEditToggle = async () => {
    if (isEditing) {
      try {
        // Save changes to server
        const updatedUser = await updateUserProfile(editForm);
        setUser(updatedUser);
        setIsEditing(false);
      } catch (error) {
        console.error('Failed to save profile:', error);
        // Keep form open if save failed
      }
    } else {
      // Start editing
      setEditForm({ ...user });
      setIsEditing(true);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEditForm(prev => ({ ...prev, [name]: value }));
  };

  const handleFollow = async () => {
    const updatedUser = {
      ...user,
      followers: user.isFollowing ? user.followers - 1 : user.followers + 1,
      isFollowing: !user.isFollowing
    };
    
    // Optimistic update
    setUser(updatedUser);
    
    try {
      await updateUserProfile({
        followers: updatedUser.followers,
        isFollowing: updatedUser.isFollowing
      });
    } catch (error) {
      // Revert on error
      setUser(user);
      console.error('Failed to update follow status:', error);
    }
  };

  const handleImageUpload = async (type: 'avatar' | 'cover') => {
    try {
      // Simulate image upload
      const newImageUrl = type === 'avatar' 
        ? "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
        : "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=200&fit=crop";

      const updateData = type === 'avatar' 
        ? { avatar: newImageUrl }
        : { coverImage: newImageUrl };

      // Update both local state and server
      setEditForm(prev => ({ ...prev, ...updateData }));
      
      if (!isEditing) {
        // If not in edit mode, update server immediately
        const updatedUser = await updateUserProfile(updateData);
        setUser(updatedUser);
      }
    } catch (error) {
      console.error('Failed to update image:', error);
    }
  };

  // Status message component
  const StatusMessage = () => {
    if (saveStatus === 'idle') return null;
    
    const statusConfig = {
      saving: { message: '💾 Saving changes...', className: 'bg-blue-100 border-blue-500 text-blue-700' },
      success: { message: '✅ Profile updated successfully!', className: 'bg-green-100 border-green-500 text-green-700' },
      error: { message: '❌ Failed to save changes. Please try again.', className: 'bg-red-100 border-red-500 text-red-700' }
    };
    
    const config = statusConfig[saveStatus];
    
    return (
      <div className={`border-l-4 p-4 mb-4 ${config.className}`}>
        <p>{config.message}</p>
      </div>
    );
  };

  if (loading && !user.name) {
    return (
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="profile-content max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      {/* Status Messages */}
      <StatusMessage />

      {/* Cover Photo */}
      <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 relative group">
        <img
          src={isEditing ? editForm.coverImage : user.coverImage}
          alt="Cover"
          className="w-full h-full object-cover"
        />
        {isEditing && (
          <button
            onClick={() => handleImageUpload('cover')}
            className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </button>
        )}
      </div>

      {/* Profile Header */}
      <div className="px-6 pb-6 relative">
        <div className="flex justify-between items-start mt-[-60px]">
          <div className="flex items-end">
            <div className="relative group">
              <img
                src={isEditing ? editForm.avatar : user.avatar}
                alt={user.name}
                className="w-32 h-32 rounded-full border-4 border-white object-cover"
              />
              {isEditing && (
                <button
                  onClick={() => handleImageUpload('avatar')}
                  className="absolute bottom-2 right-2 bg-blue-500 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </button>
              )}
            </div>
            <div className="ml-6 mb-4">
              {isEditing ? (
                <input
                  type="text"
                  name="name"
                  value={editForm.name}
                  onChange={handleInputChange}
                  className="text-2xl font-bold bg-gray-100 rounded px-3 py-1 mb-1 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              ) : (
                <h1 className="text-2xl font-bold">{user.name}</h1>
              )}
              <p className="text-gray-600 mt-1">{user.email}</p>
            </div>
          </div>

          <div className="flex space-x-3 mt-4">
            <button
              onClick={handleFollow}
              disabled={saveStatus === 'saving'}
              className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                user.isFollowing 
                  ? 'bg-gray-200 text-gray-800 hover:bg-gray-300' 
                  : 'bg-blue-500 text-white hover:bg-blue-600'
              } ${saveStatus === 'saving' ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {user.isFollowing ? 'Following' : 'Follow'}
            </button>
            
            <button
              onClick={handleEditToggle}
              disabled={saveStatus === 'saving'}
              className={`px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors ${
                saveStatus === 'saving' ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {saveStatus === 'saving' ? 'Saving...' : isEditing ? 'Save Changes' : 'Edit Profile'}
            </button>
            
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
              className="w-full bg-gray-100 rounded-lg px-4 py-3 mb-4 resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows={3}
              placeholder="Tell us about yourself..."
            />
          ) : (
            <p className="text-gray-800 mb-4 leading-relaxed">{user.bio}</p>
          )}

          <div className="flex flex-wrap items-center text-gray-600 text-sm">
            {isEditing ? (
              <>
                <input
                  type="text"
                  name="location"
                  value={editForm.location}
                  onChange={handleInputChange}
                  className="bg-gray-100 rounded px-3 py-2 mr-4 mb-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Location"
                />
                <input
                  type="text"
                  name="website"
                  value={editForm.website}
                  onChange={handleInputChange}
                  className="bg-gray-100 rounded px-3 py-2 mr-4 mb-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Website"
                />
              </>
            ) : (
              <>
                <span className="flex items-center mr-6 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {user.location}
                </span>
                <span className="flex items-center mr-6 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                  {user.website}
                </span>
              </>
            )}

            <span className="flex items-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Joined {user.joinDate}
            </span>
          </div>
        </div>

        {/* Stats */}
        <div className="flex border-t border-gray-200 mt-6 pt-4 space-x-8">
          <div className="text-center cursor-pointer hover:text-blue-500 transition-colors">
            <span className="block font-bold text-lg">{user.posts}</span>
            <span className="text-gray-600 text-sm">Posts</span>
          </div>
          <div className="text-center cursor-pointer hover:text-blue-500 transition-colors">
            <span className="block font-bold text-lg">{user.followers.toLocaleString()}</span>
            <span className="text-gray-600 text-sm">Followers</span>
          </div>
          <div className="text-center cursor-pointer hover:text-blue-500 transition-colors">
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
          <button className="px-6 py-3 text-gray-600 hover:text-blue-500 font-medium">About</button>
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
              <span className="text-gray-500 text-sm ml-2">• 2 hours ago</span>
            </div>
            <p className="mt-1 text-gray-800">Just launched my new portfolio website! Built with Next.js and Tailwind CSS. Check it out and let me know what you think! 🚀</p>
            <div className="flex mt-3 text-gray-500 space-x-6">
              <button className="flex items-center hover:text-blue-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span>24</span>
              </button>
              <button className="flex items-center hover:text-green-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                <span>42</span>
              </button>
              <button className="flex items-center hover:text-red-500 transition-colors">
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