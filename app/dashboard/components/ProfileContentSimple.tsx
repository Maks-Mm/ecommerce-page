// components/ProfileContent/ProfileContentSimple.tsx
'use client';

import { useProfile } from '@/hooks/useProfile';

export default function ProfileContentSimple() {
  const { profile, loading, error, isUsingBackend, updateProfile } = useProfile();

  if (loading) {
    return <div className="p-4">Loading profile...</div>;
  }

  return (
    <div className="p-4">
      {/* Status */}
      <div className={`p-2 mb-4 rounded ${
        isUsingBackend ? 'bg-green-200' : 'bg-yellow-200'
      }`}>
        Mode: {isUsingBackend ? 'Backend' : 'Demo'}
      </div>

      {/* Profile Data - SIMPLE LIST */}
      <div className="bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold mb-4">{profile.name}</h1>
        
        <div className="space-y-2">
          <p><strong>Email:</strong> {profile.email}</p>
          <p><strong>Bio:</strong> {profile.bio}</p>
          <p><strong>Location:</strong> {profile.location}</p>
          <p><strong>Website:</strong> {profile.website}</p>
          <p><strong>Joined:</strong> {profile.joinDate}</p>
          <p><strong>Posts:</strong> {profile.posts}</p>
          <p><strong>Followers:</strong> {profile.followers}</p>
          <p><strong>Following:</strong> {profile.following}</p>
          <p><strong>Verified:</strong> {profile.isVerified ? 'Yes' : 'No'}</p>
        </div>

        {/* Skills */}
        <div className="mt-4">
          <h3 className="font-semibold">Skills:</h3>
          <div className="flex flex-wrap gap-1 mt-1">
            {profile.skills.map((skill, index) => (
              <span key={index} className="bg-gray-200 px-2 py-1 rounded text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-4">
          <h3 className="font-semibold">Social:</h3>
          <div className="space-y-1 mt-1">
            {Object.entries(profile.socialLinks).map(([platform, username]) => (
              <p key={platform} className="text-sm">
                {platform}: {username}
              </p>
            ))}
          </div>
        </div>

        {/* Test Button */}
        <button
          onClick={() => updateProfile({ bio: `Updated: ${new Date().toLocaleTimeString()}` })}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Test Update
        </button>
      </div>

      {error && (
        <div className="mt-4 p-3 bg-red-200 text-red-800 rounded">
          {error}
        </div>
      )}
    </div>
  );
}