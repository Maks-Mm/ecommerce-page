// app/dashboard/components/HomeContent.tsx
import { useState, useEffect } from 'react';

export default function HomeContent() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Simulate data loading
    const loadData = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      clearInterval(timer);
      clearTimeout(loadData);
    };
  }, []);

  const quickActions = [
    { name: 'New Task', icon: '➕', color: 'bg-blue-100 hover:bg-blue-200' },
    { name: 'Upload File', icon: '📁', color: 'bg-green-100 hover:bg-green-200' },
    { name: 'Schedule', icon: '📅', color: 'bg-purple-100 hover:bg-purple-200' },
    { name: 'Settings', icon: '⚙️', color: 'bg-gray-100 hover:bg-gray-200' },
  ];

  const recentActivities = [
    { action: 'Completed task', project: 'Project Alpha', time: '2 hours ago' },
    { action: 'Uploaded file', project: 'Documentation', time: '4 hours ago' },
    { action: 'Commented on', project: 'Team Discussion', time: '1 day ago' },
    { action: 'Created project', project: 'New Initiative', time: '2 days ago' },
  ];

  if (isLoading) {
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3 mb-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-32 bg-gray-200 rounded-lg"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Good Morning, Alex! 👋
            </h1>
            <p className="text-gray-600">
              Here's what's happening with your projects today.
            </p>
          </div>
          <div className="text-right mt-4 md:mt-0">
            <p className="text-lg font-semibold text-gray-800">
              {currentTime.toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
            <p className="text-2xl font-bold text-blue-600">
              {currentTime.toLocaleTimeString('en-US', { 
                hour: '2-digit', 
                minute: '2-digit',
                second: '2-digit'
              })}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-blue-800 text-sm uppercase tracking-wide">
                    Tasks Completed
                  </h3>
                  <p className="text-3xl font-bold mt-2 text-blue-900">128</p>
                  <p className="text-sm text-blue-600 mt-1">
                    <span className="text-green-600">↑ 12%</span> from last week
                  </p>
                </div>
                <div className="text-2xl">✅</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border border-green-200">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-green-800 text-sm uppercase tracking-wide">
                    Overall Progress
                  </h3>
                  <p className="text-3xl font-bold mt-2 text-green-900">75%</p>
                  <div className="w-full bg-green-200 rounded-full h-2 mt-3">
                    <div 
                      className="bg-green-600 h-2 rounded-full" 
                      style={{ width: '75%' }}
                    ></div>
                  </div>
                </div>
                <div className="text-2xl">📈</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg border border-purple-200">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-purple-800 text-sm uppercase tracking-wide">
                    Upcoming Deadlines
                  </h3>
                  <p className="text-3xl font-bold mt-2 text-purple-900">5</p>
                  <p className="text-sm text-purple-600 mt-1">
                    2 urgent, 3 this week
                  </p>
                </div>
                <div className="text-2xl">⏰</div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  className={`${action.color} p-4 rounded-lg transition-all duration-200 transform hover:scale-105 border border-transparent hover:border-gray-300`}
                >
                  <div className="text-2xl mb-2">{action.icon}</div>
                  <span className="font-medium text-gray-700">{action.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-800">Recent Activity</h2>
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                View All
              </button>
            </div>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-gray-800">
                      <span className="font-medium">{activity.action}</span> in{' '}
                      <span className="text-blue-600">{activity.project}</span>
                    </p>
                    <p className="text-sm text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Upcoming Events */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Upcoming Events</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <p className="font-medium text-gray-800">Team Meeting</p>
                <p className="text-sm text-gray-600">Today, 2:00 PM</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <p className="font-medium text-gray-800">Project Review</p>
                <p className="text-sm text-gray-600">Tomorrow, 10:00 AM</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <p className="font-medium text-gray-800">Client Call</p>
                <p className="text-sm text-gray-600">Friday, 3:30 PM</p>
              </div>
            </div>
          </div>

          {/* Team Members */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Team Members</h2>
            <div className="space-y-3">
              {['Sarah Chen', 'Mike Rodriguez', 'Emma Wilson', 'David Kim'].map((member, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                    {member.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{member}</p>
                    <p className="text-sm text-gray-500">Online</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Progress Overview */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Progress Overview</h2>
            <div className="space-y-4">
              {[
                { name: 'Project Alpha', progress: 85, color: 'bg-blue-500' },
                { name: 'Website Redesign', progress: 60, color: 'bg-green-500' },
                { name: 'Mobile App', progress: 45, color: 'bg-purple-500' },
                { name: 'Documentation', progress: 30, color: 'bg-yellow-500' },
              ].map((project, index) => (
                <div key={index}>
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>{project.name}</span>
                    <span>{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`${project.color} h-2 rounded-full transition-all duration-500`}
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}