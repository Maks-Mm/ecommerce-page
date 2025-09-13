"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect, Suspense } from "react";

// Create a separate component that uses useSearchParams
function DienstleistungenContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const page = searchParams.get("page"); // "spa", "web", "ecom"
  const [activeTab, setActiveTab] = useState(page || "");

  useEffect(() => {
    setActiveTab(page || "");
  }, [page]);

  const handleNav = (key: string) => {
    router.push(`/dienst?page=${key}`);
  };

  // Service data
  const services = {
    spa: {
      title: "Single Page Applications",
      description: "Modern, responsive web applications that deliver seamless user experiences",
      features: [
        "React/Next.js Development",
        "Progressive Web App Capabilities",
        "State Management Integration",
        "API Integration",
        "Performance Optimization"
      ],
      process: [
        { step: "Consultation", desc: "Understanding your business needs" },
        { step: "Design", desc: "Creating intuitive UI/UX designs" },
        { step: "Development", desc: "Building with modern frameworks" },
        { step: "Testing", desc: "Quality assurance across devices" },
        { step: "Deployment", desc: "Launch and ongoing support" }
      ],
      projects: [
        { name: "Corporate Dashboard", tech: "React, Redux, Material-UI" },
        { name: "Real Estate Platform", tech: "Next.js, Mapbox, Stripe" },
        { name: "Healthcare Portal", tech: "Vue.js, GraphQL, AWS" }
      ]
    },
    web: {
      title: "Web Development",
      description: "Comprehensive web solutions from simple sites to complex web applications",
      features: [
        "Responsive Design",
        "Frontend & Backend Development",
        "Database Integration",
        "SEO Optimization",
        "Security Implementation"
      ],
      process: [
        { step: "Planning", desc: "Defining scope and requirements" },
        { step: "Design", desc: "Wireframing and prototyping" },
        { step: "Development", desc: "Frontend and backend coding" },
        { step: "Content Integration", desc: "Adding and optimizing content" },
        { step: "Launch & Maintenance", desc: "Going live and ongoing updates" }
      ],
      projects: [
        { name: "E-Learning Platform", tech: "MERN Stack, WebRTC" },
        { name: "News Portal", tech: "WordPress, Custom Theme" },
        { name: "Booking System", tech: "Node.js, MongoDB, Express" }
      ]
    },
    ecom: {
      title: "E-Commerce Solutions",
      description: "Complete online store development with payment processing and inventory management",
      features: [
        "Shopping Cart Implementation",
        "Payment Gateway Integration",
        "Inventory Management",
        "Order Processing System",
        "Customer Account Management"
      ],
      process: [
        { step: "Strategy", desc: "Defining business objectives" },
        { step: "Platform Selection", desc: "Choosing the right e-commerce solution" },
        { step: "Design & Development", desc: "Creating the storefront" },
        { step: "Payment Integration", desc: "Setting up secure transactions" },
        { step: "Launch & Marketing", desc: "Going live and driving traffic" }
      ],
      projects: [
        { name: "Fashion Retail Store", tech: "Shopify, Custom Theme" },
        { name: "Electronics Marketplace", tech: "Magento, PayPal Integration" },
        { name: "Subscription Service", tech: "WooCommerce, Recurly" }
      ]
    }
  };

  return (
    <main className="p-4 md:p-10 min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Dienstleistungen</h1>

      <div className="flex flex-wrap gap-4 mb-8">
        <button
          className={`px-6 py-3 rounded-lg transition-all ${
            activeTab === "spa" 
              ? "bg-blue-600 text-white shadow-lg" 
              : "bg-white text-gray-700 shadow hover:shadow-md"
          }`}
          onClick={() => handleNav("spa")}
        >
          SPA Development
        </button>
        <button
          className={`px-6 py-3 rounded-lg transition-all ${
            activeTab === "web" 
              ? "bg-blue-600 text-white shadow-lg" 
              : "bg-white text-gray-700 shadow hover:shadow-md"
          }`}
          onClick={() => handleNav("web")}
        >
          Web Development
        </button>
        <button
          className={`px-6 py-3 rounded-lg transition-all ${
            activeTab === "ecom" 
              ? "bg-blue-600 text-white shadow-lg" 
              : "bg-white text-gray-700 shadow hover:shadow-md"
          }`}
          onClick={() => handleNav("ecom")}
        >
          E-Commerce
        </button>
      </div>

      {/* Default view when no tab is selected */}
      {!activeTab && (
        <div className="bg-white p-8 rounded-xl shadow">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Services</h2>
          <p className="text-gray-600 mb-6">
            We offer comprehensive digital solutions tailored to your business needs. 
            Select a service category above to learn more about what we can do for you.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div 
              className="border rounded-lg p-5 cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => handleNav("spa")}
            >
              <h3 className="font-semibold text-lg mb-2 text-blue-600">SPA Development</h3>
              <p className="text-gray-600">Fast, modern web applications with seamless user experiences.</p>
            </div>
            
            <div 
              className="border rounded-lg p-5 cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => handleNav("web")}
            >
              <h3 className="font-semibold text-lg mb-2 text-blue-600">Web Development</h3>
              <p className="text-gray-600">Complete web solutions from simple sites to complex applications.</p>
            </div>
            
            <div 
              className="border rounded-lg p-5 cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => handleNav("ecom")}
            >
              <h3 className="font-semibold text-lg mb-2 text-blue-600">E-Commerce</h3>
              <p className="text-gray-600">Robust online stores with secure payment processing.</p>
            </div>
          </div>
        </div>
      )}

      {/* SPA Section */}
      {activeTab === "spa" && (
        <section className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">{services.spa.title}</h2>
          <p className="text-gray-600 mb-6">{services.spa.description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Key Features</h3>
              <ul className="space-y-3">
                {services.spa.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Our Process</h3>
              <div className="space-y-4">
                {services.spa.process.map((item, index) => (
                  <div key={index}>
                    <h4 className="font-medium text-gray-800">{item.step}</h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-800">Example Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {services.spa.projects.map((project, index) => (
              <div key={index} className="border rounded-lg p-4">
                <h4 className="font-medium text-gray-800">{project.name}</h4>
                <p className="text-sm text-gray-600">{project.tech}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-gray-800">Ready to build your SPA?</h3>
            <p className="text-gray-600 mb-4">Contact us for a free consultation and project estimate.</p>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Get in Touch
            </button>
          </div>
        </section>
      )}

      {/* Web Development Section */}
      {activeTab === "web" && (
        <section className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">{services.web.title}</h2>
          <p className="text-gray-600 mb-6">{services.web.description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Key Features</h3>
              <ul className="space-y-3">
                {services.web.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Our Process</h3>
              <div className="space-y-4">
                {services.web.process.map((item, index) => (
                  <div key={index}>
                    <h4 className="font-medium text-gray-800">{item.step}</h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-800">Example Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {services.web.projects.map((project, index) => (
              <div key={index} className="border rounded-lg p-4">
                <h4 className="font-medium text-gray-800">{project.name}</h4>
                <p className="text-sm text-gray-600">{project.tech}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-gray-800">Need a website?</h3>
            <p className="text-gray-600 mb-4">Let's discuss your project requirements and create a solution that works for you.</p>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Start a Project
            </button>
          </div>
        </section>
      )}

      {/* E-Commerce Section */}
      {activeTab === "ecom" && (
        <section className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">{services.ecom.title}</h2>
          <p className="text-gray-600 mb-6">{services.ecom.description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Key Features</h3>
              <ul className="space-y-3">
                {services.ecom.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Our Process</h3>
              <div className="space-y-4">
                {services.ecom.process.map((item, index) => (
                  <div key={index}>
                    <h4 className="font-medium text-gray-800">{item.step}</h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-800">Example Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {services.ecom.projects.map((project, index) => (
              <div key={index} className="border rounded-lg p-4">
                <h4 className="font-medium text-gray-800">{project.name}</h4>
                <p className="text-sm text-gray-600">{project.tech}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-gray-800">Ready to start selling online?</h3>
            <p className="text-gray-600 mb-4">We'll help you build an e-commerce solution that converts visitors into customers.</p>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Discuss Your Store
            </button>
          </div>
        </section>
      )}
    </main>
  );
}

// Main page component with Suspense boundary
export default function DienstleistungenPage() {
  return (
    <Suspense fallback={
      <div className="p-4 md:p-10 min-h-screen bg-gray-50">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Dienstleistungen</h1>
        <div className="bg-white p-8 rounded-xl shadow">
          <p className="text-gray-600">Loading services...</p>
        </div>
      </div>
    }>
      <DienstleistungenContent />
    </Suspense>
  );
}