"use client";
import React, { useState, useRef } from 'react';

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
  isVerified: boolean;
  isFollowing: boolean;
  skills: string[];
  socialLinks: {
    twitter?: string;
    github?: string;
    linkedin?: string;
    instagram?: string;
  };
}

// Enhanced mock user data
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
  posts: 178,
  isVerified: true,
  isFollowing: false,
  skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Node.js"],
  socialLinks: {
    twitter: "alexjohnson",
    github: "alexjohnson",
    linkedin: "alexjohnson",
    instagram: "alexjohnson"
  }
};

// Post interface
interface Post {
  id: number;
  content: string;
  timestamp: string;
  likes: number;
  comments: number;
  shares: number;
  isLiked: boolean;
}

const samplePosts: Post[] = [
  {
    id: 1,
    content: "Just launched my new portfolio website! Built with Next.js and Tailwind CSS. Check it out and let me know what you think! 🚀",
    timestamp: "2 hours ago",
    likes: 127,
    comments: 24,
    shares: 42,
    isLiked: false
  },
  {
    id: 2,
    content: "Working on a new open-source project - a component library for React. Excited to share it with the community soon! 💻",
    timestamp: "1 day ago",
    likes: 89,
    comments: 15,
    shares: 8,
    isLiked: true
  }
];

export default function EnhancedProfileContent() {
  const [user, setUser] = useState<User>(mockUser);
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({ ...user });
  const [activeTab, setActiveTab] = useState<'posts' | 'media' | 'likes' | 'about'>('posts');
  const [posts, setPosts] = useState<Post[]>(samplePosts);
  const [showImageUpload, setShowImageUpload] = useState<'avatar' | 'cover' | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleEditToggle = () => {
    if (isEditing) {
      setUser(editForm);
    } else {
      setEditForm({ ...user });
    }
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEditForm({ ...editForm, [name]: value });
  };

  const handleSkillAdd = (skill: string) => {
    if (skill && !editForm.skills.includes(skill)) {
      setEditForm({
        ...editForm,
        skills: [...editForm.skills, skill]
      });
    }
  };

  const handleSkillRemove = (skillToRemove: string) => {
    setEditForm({
      ...editForm,
      skills: editForm.skills.filter(skill => skill !== skillToRemove)
    });
  };

  const handleFollow = () => {
    setUser(prev => ({
      ...prev,
      followers: prev.isFollowing ? prev.followers - 1 : prev.followers + 1,
      isFollowing: !prev.isFollowing
    }));
  };

  const handleLike = (postId: number) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { 
            ...post, 
            likes: post.isLiked ? post.likes - 1 : post.likes + 1,
            isLiked: !post.isLiked
          }
        : post
    ));
  };

  const handleImageUpload = (type: 'avatar' | 'cover') => {
    setShowImageUpload(type);
    // In a real app, you would handle file upload here
    setTimeout(() => {
      if (type === 'avatar') {
        setEditForm({
          ...editForm,
          avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
        });
      } else {
        setEditForm({
          ...editForm,
          coverImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=200&fit=crop"
        });
      }
      setShowImageUpload(null);
    }, 1000);
  };

  const SocialIcon = ({ platform }: { platform: keyof typeof user.socialLinks }) => {
    const icons = {
      twitter: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.016 10.016 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      ),
      github: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      linkedin: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      instagram: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    };

    return icons[platform];
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Cover Photo with Upload Option */}
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
              <div className="flex items-center space-x-2">
                {isEditing ? (
                  <input
                    type="text"
                    name="name"
                    value={editForm.name}
                    onChange={handleInputChange}
                    className="text-2xl font-bold bg-gray-100 rounded px-3 py-1"
                  />
                ) : (
                  <>
                    <h1 className="text-2xl font-bold">{user.name}</h1>
                    {user.isVerified && (
                      <span className="bg-blue-500 text-white p-1 rounded-full" title="Verified">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                    )}
                  </>
                )}
              </div>
              <p className="text-gray-600 mt-1">{user.email}</p>
            </div>
          </div>

          <div className="flex space-x-3 mt-4">
            <button
              onClick={handleFollow}
              className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                user.isFollowing 
                  ? 'bg-gray-200 text-gray-800 hover:bg-gray-300' 
                  : 'bg-blue-500 text-white hover:bg-blue-600'
              }`}
            >
              {user.isFollowing ? 'Following' : 'Follow'}
            </button>
            <button
              onClick={handleEditToggle}
              className="px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
            >
              {isEditing ? 'Save' : 'Edit Profile'}
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

          {/* Skills Section */}
          {isEditing && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Skills</label>
              <div className="flex flex-wrap gap-2 mb-2">
                {editForm.skills.map((skill, index) => (
                  <span key={index} className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800">
                    {skill}
                    <button
                      type="button"
                      onClick={() => handleSkillRemove(skill)}
                      className="ml-2 hover:text-blue-600"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
              <input
                type="text"
                placeholder="Add a skill..."
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    handleSkillAdd(e.currentTarget.value);
                    e.currentTarget.value = '';
                  }
                }}
                className="px-3 py-2 border border-gray-300 rounded text-sm"
              />
            </div>
          )}

          {/* Social Links */}
          {isEditing ? (
            <div className="grid grid-cols-2 gap-3 mb-4">
              {Object.keys(user.socialLinks).map((platform) => (
                <input
                  key={platform}
                  type="text"
                  placeholder={`${platform} username`}
                  className="px-3 py-2 border border-gray-300 rounded text-sm"
                  onChange={(e) => setEditForm({
                    ...editForm,
                    socialLinks: {
                      ...editForm.socialLinks,
                      [platform]: e.target.value
                    }
                  })}
                />
              ))}
            </div>
          ) : (
            <div className="flex space-x-4 mb-4">
              {Object.entries(user.socialLinks).map(([platform, username]) => (
                <a
                  key={platform}
                  href={`https://${platform}.com/${username}`}
                  className="text-gray-500 hover:text-blue-500 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SocialIcon platform={platform as keyof typeof user.socialLinks} />
                </a>
              ))}
            </div>
          )}

          <div className="flex flex-wrap items-center text-gray-600 text-sm">
            {isEditing ? (
              <>
                <input
                  type="text"
                  name="location"
                  value={editForm.location}
                  onChange={handleInputChange}
                  className="bg-gray-100 rounded px-3 py-2 mr-4 mb-2 flex-1 min-w-[200px]"
                  placeholder="Location"
                />
                <input
                  type="text"
                  name="website"
                  value={editForm.website}
                  onChange={handleInputChange}
                  className="bg-gray-100 rounded px-3 py-2 mr-4 mb-2 flex-1 min-w-[200px]"
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

      {/* Enhanced Tabs */}
      <div className="border-t border-gray-200">
        <nav className="flex">
          {(['posts', 'media', 'likes', 'about'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-4 font-medium capitalize transition-colors ${
                activeTab === tab
                  ? 'border-b-2 border-blue-500 text-blue-500'
                  : 'text-gray-600 hover:text-blue-500'
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="p-6">
        {activeTab === 'posts' && (
          <div className="space-y-6">
            {posts.map((post) => (
              <div key={post.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="ml-4 flex-1">
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold">{user.name}</span>
                      <span className="text-gray-500 text-sm">•</span>
                      <span className="text-gray-500 text-sm">{post.timestamp}</span>
                    </div>
                    <p className="mt-2 text-gray-800 leading-relaxed">{post.content}</p>
                    <div className="flex mt-4 space-x-6 text-gray-500">
                      <button 
                        onClick={() => handleLike(post.id)}
                        className={`flex items-center space-x-1 transition-colors ${
                          post.isLiked ? 'text-red-500' : 'hover:text-red-500'
                        }`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill={post.isLiked ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={post.isLiked ? 0 : 2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                        <span>{post.likes}</span>
                      </button>
                      <button className="flex items-center space-x-1 hover:text-blue-500 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        <span>{post.comments}</span>
                      </button>
                      <button className="flex items-center space-x-1 hover:text-green-500 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                        </svg>
                        <span>{post.shares}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'about' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Skills & Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {user.skills.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact Information</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                  <span>{user.email}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{user.location}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'media' && (
          <div className="text-center py-12">
            <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No media yet</h3>
            <p className="text-gray-500">Photos and videos will appear here</p>
          </div>
        )}

        {activeTab === 'likes' && (
          <div className="text-center py-12">
            <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No likes yet</h3>
            <p className="text-gray-500">Posts you've liked will appear here</p>
          </div>
        )}
      </div>

      {/* Image Upload Modal */}
      {showImageUpload && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-4">
            <h3 className="text-lg font-semibold mb-4">
              Change {showImageUpload === 'avatar' ? 'Profile Picture' : 'Cover Photo'}
            </h3>
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
              <p className="mt-4 text-gray-600">Uploading image...</p>
            </div>
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowImageUpload(null)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}