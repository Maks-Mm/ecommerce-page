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

const pagesMap = [
  { name: "Home", Component: HomeContent },
  { name: "Profile", Component: ProfileContent },
  { name: "Schedule", Component: ScheduleContent },
  { name: "Activities", Component: ActivitiesContent },
  { name: "Settings", Component: SettingsContent },
];

export default function DashboardPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const ActivePage = pagesMap[activeIndex].Component;

  return (
    <>
      <DynamicHead title={`Dashboard — ${pagesMap[activeIndex].name}`} />
      <DashboardLayout activeIndex={activeIndex} onNavClick={setActiveIndex}>
        <ActivePage />
      </DashboardLayout>
    </>
  );
}
