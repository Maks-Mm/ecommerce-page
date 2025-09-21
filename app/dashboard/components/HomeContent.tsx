// app/dashboard/components/HomeContent.tsx
export default function HomeContent() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Welcome to Your Dashboard</h1>
      <p className="text-gray-600">
        This is your personalized dashboard. Use the navigation menu to explore different sections.
      </p>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold text-blue-800">Quick Stats</h3>
          <p className="text-2xl font-bold mt-2">128</p>
          <p className="text-sm text-blue-600">Tasks Completed</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-semibold text-green-800">Progress</h3>
          <p className="text-2xl font-bold mt-2">75%</p>
          <p className="text-sm text-green-600">Overall Progress</p>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg">
          <h3 className="font-semibold text-purple-800">Upcoming</h3>
          <p className="text-2xl font-bold mt-2">5</p>
          <p className="text-sm text-purple-600">Deadlines</p>
        </div>
      </div>
    </div>
  );
}