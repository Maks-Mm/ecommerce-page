// app/dashboard/page.tsx
"use client";

import React, { useState } from "react";
import styles from "./dashboard.module.css";


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

  return (
    <main>
      {/* Sidebar */}
      <nav className="main-menu">
        <h1>Fitness App</h1>
        <img
          className="logo"
          src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/4cfdcb5a-0137-4457-8be1-6e7bd1f29ebb"
          alt="logo"
        />
        <ul>
          {navItems.map((item, index) => (
            <li
              key={index}
              className={`nav-item ${activeIndex === index ? "active" : ""}`}
              onClick={() => handleNavClick(index)}
            >
              <b></b>
              <b></b>
              <a href="#">
                <i className={`fa ${item.icon} nav-icon`}></i>
                <span className="nav-text">{item.text}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Content */}
      <section className="content">
        <div className="left-content">
          {/* Popular Activities */}
          <div className="activities">
            <h1>Popular Activities</h1>
            <div className="activity-container">
              {[
                { src: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/467cf682-03fb-4fae-b129-5d4f5db304dd", title: "Tennis" },
                { src: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/3bab6a71-c842-4a50-9fed-b4ce650cb478", title: "Hiking" },
                { src: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/c8e88356-8df5-4ac5-9e1f-5b9e99685021", title: "Running" },
                { src: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/69437d08-f203-4905-8cf5-05411cc28c19", title: "Cycling" },
                { src: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/e1a66078-1927-4828-b793-15c403d06411", title: "Yoga" },
                { src: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/7568e0ff-edb5-43dd-bff5-aed405fc32d9", title: "Swimming" },
              ].map((activity, i) => (
                <div key={i} className={`image-container img-${i + 1}`}>
                  <img src={activity.src} alt={activity.title} />
                  <div className="overlay">
                    <h3>{activity.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Weekly Schedule and Personal Bests */}
          <div className="left-bottom">
            <div className="weekly-schedule">
              <h1>Weekly Schedule</h1>
              {/* Render activities dynamically... */}
            </div>
            <div className="personal-bests">
              <h1>Personal Bests</h1>
              {/* Render best items dynamically... */}
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="right-content">
          <div className="user-info">
            <div className="icon-container">
              <i className="fa fa-bell nav-icon"></i>
              <i className="fa fa-message nav-icon"></i>
            </div>
            <h4>Kelsey Miller</h4>
            <img
              src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/40b7cce2-c289-4954-9be0-938479832a9c"
              alt="user"
            />
          </div>

          <div className="active-calories">
            <h1 style={{ alignSelf: "flex-start" }}>Active Calories</h1>
            <div className="active-calories-container">
              <div className="box" style={{ "--i": "85%" } as React.CSSProperties}>
                <div className="circle">
                  <h2>
                    85<small>%</small>
                  </h2>
                </div>
              </div>
              <div className="calories-content">
                <p>
                  <span>Today:</span> 400
                </p>
                <p>
                  <span>This Week:</span> 3500
                </p>
                <p>
                  <span>This Month:</span> 14000
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

