// app/dashboard/page.tsx
"use client";

// app/dashboard/page.tsx
"use client";

import React, { useState } from "react";

export default function DashboardPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  const navItems = [
    { icon: "fa-house", text: "Home" },
    { icon: "fa-user", text: "Profile" },
    { icon: "fa-calendar-check", text: "Schedule" },
    { icon: "fa-person-running", text: "Activities" },
    { icon: "fa-sliders", text: "Settings" },
  ];

  const handleNavClick = (index: number) => {
    setActiveIndex(index);
  };

  const activities = [
    { src: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/467cf682-03fb-4fae-b129-5d4f5db304dd", title: "Tennis" },
    { src: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/3bab6a71-c842-4a50-9fed-b4ce650cb478", title: "Hiking" },
    { src: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/c8e88356-8df5-4ac5-9e1f-5b9e99685021", title: "Running" },
    { src: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/69437d08-f203-4905-8cf5-05411cc28c19", title: "Cycling" },
    { src: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/e1a66078-1927-4828-b793-15c403d06411", title: "Yoga" },
    { src: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/7568e0ff-edb5-43dd-bff5-aed405fc32d9", title: "Swimming" },
  ];

  return (
    <main className="flex items-center justify-center min-h-screen bg-cover bg-no-repeat" style={{ backgroundImage: "url('https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/5baf8325-ed69-40b0-b9d2-d8c5d2bde3b0')" }}>
      {/* Sidebar */}
      <nav className="bg-purple-900 text-white rounded-l-2xl p-4 w-1/6 md:w-16 flex flex-col items-center select-none">
        <h1 className="text-center text-xl font-medium mb-6 hidden md:block">Fitness App</h1>
        <img className="w-8 mb-6 block md:hidden" src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/4cfdcb5a-0137-4457-8be1-6e7bd1f29ebb" alt="logo" />
        <ul className="w-full">
          {navItems.map((item, index) => (
            <li key={index} className={`mb-2 rounded-l-2xl overflow-hidden ${activeIndex === index ? "bg-white text-black" : "hover:bg-purple-800"} `} onClick={() => handleNavClick(index)}>
              <a className="flex items-center justify-center gap-2 p-3">
                <i className={`fa ${item.icon} text-lg`}></i>
                <span className="hidden md:inline">{item.text}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Content */}
      <section className="flex-1 grid grid-cols-[3fr_1fr] md:grid-cols-1 gap-4 p-4">
        {/* Left Content */}
        <div className="flex flex-col gap-4">
          {/* Activities */}
          <div className="bg-gray-100 rounded-2xl p-4 grid grid-cols-3 md:grid-cols-2 gap-2">
            <h1 className="col-span-3 text-lg font-bold mb-2">Popular Activities</h1>
            {activities.map((activity, i) => (
              <div key={i} className={`relative rounded-lg overflow-hidden`}>
                <img src={activity.src} alt={activity.title} className="w-full h-36 object-cover"/>
                <div className="absolute inset-0 flex items-end justify-end bg-gradient-to-b from-transparent to-blue-900/50 p-2">
                  <h3 className="text-white">{activity.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Weekly Schedule and Personal Bests */}
          <div className="flex flex-col md:flex-col gap-4">
            <div className="bg-gray-100 rounded-2xl p-4">
              <h1 className="text-lg font-bold mb-2">Weekly Schedule</h1>
              {/* Render schedule dynamically */}
            </div>
            <div className="bg-gray-100 rounded-2xl p-4 hidden md:block">
              <h1 className="text-lg font-bold mb-2">Personal Bests</h1>
              {/* Render personal bests dynamically */}
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex flex-col gap-4">
          <div className="bg-gray-100 rounded-2xl p-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <i className="fa fa-bell"></i>
              <i className="fa fa-message"></i>
            </div>
            <h4>Kelsey Miller</h4>
            <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/40b7cce2-c289-4954-9be0-938479832a9c" className="w-10 h-10 rounded-full object-cover" alt="user"/>
          </div>

          <div className="bg-blue-100 rounded-2xl p-4 flex flex-col gap-4">
            <h1 className="text-lg font-bold">Active Calories</h1>
            <div className="flex items-center gap-4 md:flex-col">
              <div className="relative w-20 h-20">
                <div className="w-20 h-20 rounded-full bg-gradient-conic from-purple-800 to-gray-300 flex items-center justify-center">
                  <h2 className="text-center text-gray-700 text-lg font-semibold">85<small className="text-sm">%</small></h2>
                </div>
              </div>
              <div className="flex flex-col gap-1 text-gray-700">
                <p><span className="font-bold">Today:</span> 400</p>
                <p><span className="font-bold">This Week:</span> 3500</p>
                <p><span className="font-bold">This Month:</span> 14000</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
//this is a example to that we fallow : https://codepen.io/Thayronleao-consultor/pen/NPGKzWM ,the current styles are to correct ,probably do we create separate file for styles to burgerMenu from left site 