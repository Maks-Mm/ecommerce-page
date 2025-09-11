// app/dashboard/page.tsx
"use client";
import { useState } from "react";
import DynamicHead from "./components/DynamicHead";
import DashboardLayout from "./components/DashboardLayout";
import HomeContent from "./components/HomeContent";
import ActivitiesContent from "./components/ActivitiesContent";
import ProfileContent from "./components/ProfileContent";
import ScheduleContent from "./components/ScheduleContent";
import SettingsContent from "./components/SettingsContent";

export default function DashboardPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  const pages = [
    <HomeContent key="home" />,
    <ActivitiesContent key="activities" />,
    <ProfileContent key="profile" />,
    <ScheduleContent key="schedule" />,
    <SettingsContent key="settings" />,
  ];

  return (
    <>
      <DynamicHead title={`Dashboard — ${["Home", "Activities", "Profile", "Schedule", "Settings"][activeIndex]}`} />
      <DashboardLayout activeIndex={activeIndex} onNavClick={setActiveIndex}>
        {pages[activeIndex]}
      </DashboardLayout>
    </>
  );
}
