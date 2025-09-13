// ActivitiesContent.tsx
  "use client";
import React, { useState } from "react";

interface DigitalActivity {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}

export default function ActivitiesContent() {
  const activities: DigitalActivity[] = [
    {
      id: 1,
      title: "Digitale Transformation",
      description: "Umfassende Strategien für den Übergang zu digitalen Geschäftsprozessen.",
      imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "Strategie"
    },
    {
      id: 2,
      title: "Cloud-Lösungen",
      description: "Sichere und skalierbare Cloud-Infrastrukturen für Ihr Unternehmen.",
      imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "Technologie"
    },
    {
      id: 3,
      title: "KI-Integration",
      description: "Künstliche Intelligenz zur Automatisierung und Optimierung von Prozessen.",
      imageUrl: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "Innovation"
    },
    {
      id: 4,
      title: "Cybersecurity",
      description: "Umfassender Schutz Ihrer Daten und Systeme vor Cyber-Bedrohungen.",
      imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "Sicherheit"
    },
    {
      id: 5,
      title: "Datenanalyse",
      description: "Data-Driven Insights für fundierte Geschäftsentscheidungen.",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "Daten"
    },
    {
      id: 6,
      title: "IoT-Lösungen",
      description: "Vernetzte Geräte und Sensoren für intelligente Geschäftsprozesse.",
      imageUrl: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "Technologie"
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState<string>("Alle");
  const categories = ["Alle", ...new Set(activities.map(activity => activity.category))];

  const filteredActivities = selectedCategory === "Alle" 
    ? activities 
    : activities.filter(activity => activity.category === selectedCategory);

  return (
    <div className="activities p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Digitale Lösungen für Unternehmen</h1>
      <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
        Wir unterstützen Unternehmen und Institutionen bei der digitalen Transformation mit maßgeschneiderten Lösungen und modernster Technologie.
      </p>
      
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full transition-colors ${
              selectedCategory === category
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      
      <div className="activity-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredActivities.map(activity => (
          <div key={activity.id} className="image-container group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white">
            <div className="h-48 overflow-hidden">
              <img 
                src={activity.imageUrl} 
                alt={activity.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-4">
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full mb-2">
                {activity.category}
              </span>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{activity.title}</h3>
              <p className="text-gray-600">{activity.description}</p>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm">
                Mehr erfahren
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}