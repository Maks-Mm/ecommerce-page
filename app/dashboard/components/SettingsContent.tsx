// app/dashboard/components/SettingsContent.tsx
"use client";
import React, { useState } from "react";

type SettingItem = {
  icon: string;
  alt: string;
  title: string;
  sub: string;
};

type SettingsData = {
  [group: string]: SettingItem[];
};

const settingsData: SettingsData = {
  connections: [
    {
      icon: "https://cdn-icons-png.flaticon.com/128/659/659998.png",
      alt: "connected",
      title: "Connected devices",
      sub: "Bluetooth, USB",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/128/2901/2901643.png",
      alt: "wireless",
      title: "Network & Internet",
      sub: "Wi-Fi, Data, Ethernet",
    },
  ],
  visual: [
    {
      icon: "https://cdn-icons-png.flaticon.com/128/2633/2633329.png",
      alt: "display",
      title: "Display",
      sub: "Theme, font size, brightness",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/256/739/739249.png",
      alt: "wallpaper",
      title: "Wallpaper",
      sub: "Home, lock screen, screensaver",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/256/4603/4603384.png",
      alt: "gesture",
      title: "Gestures",
      sub: "Use gestures and keys to open functions quickly",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/128/2645/2645897.png",
      alt: "notification",
      title: "Notifications",
      sub: "History, conversations, alerts",
    },
  ],
  capacity: [
    {
      icon: "https://cdn-icons-png.flaticon.com/128/664/664885.png",
      alt: "battery",
      title: "Battery",
      sub: "0% - About No min left",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/128/1975/1975672.png",
      alt: "storage",
      title: "Storage",
      sub: "0% used - 0 GB free",
    },
  ],
};

export default function SettingsContent() {
  const [search, setSearch] = useState("");

  return (
    <div className="flex justify-center w-full">
      {/* Centered container */}
      <div className="bg-gray-100 min-h-screen p-6 max-w-3xl w-full">
        <h1 className="text-2xl font-semibold mb-6 text-center">Settings</h1>

        {/* Search */}
        <input
          type="search"
          placeholder="Search settings"
          className="w-full p-2 border rounded-lg mb-6"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Render groups */}
        {Object.entries(settingsData).map(([group, items]) => {
          const filteredItems = items.filter((item) =>
            item.title.toLowerCase().includes(search.toLowerCase())
          );
          if (filteredItems.length === 0) return null;

          return (
            <div key={group} className="bg-white rounded-2xl m-4 shadow">
              {filteredItems.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 hover:bg-gray-100 cursor-pointer rounded-2xl transition"
                >
                  <img src={item.icon} alt={item.alt} className="w-6 h-6" />
                  <div>
                    <div className="text-lg font-medium">{item.title}</div>
                    <div className="text-sm text-gray-500">{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}
