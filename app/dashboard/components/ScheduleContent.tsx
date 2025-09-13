"use client";
import React, { useState, useEffect } from "react";

type ScheduleContentProps = {
  sidebarColors?: string[]; // optional colors to match sidebar gradient
};

export default function ScheduleContent({ sidebarColors = ["#1f2937", "#1e40af"] }: ScheduleContentProps) {
  const months = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];
  const [currentMonthIndex, setCurrentMonthIndex] = useState<number>(5); // June
  const [selectedDay, setSelectedDay] = useState<number>(25);
  const [selectedDuration, setSelectedDuration] = useState<string>("15 Minutes");
  const [selectedTime, setSelectedTime] = useState<string>("9:00 AM");

  const timeSlots = [
    "9:00 AM","9:15 AM","9:30 AM","9:45 AM","10:00",
    "10:15 AM","10:30 AM","10:45 AM","11:00","12:00 PM",
    "12:15 PM","12:30 PM","12:45 PM","1:00 PM","1:15 PM",
    "1:30 PM","1:45 PM","2:00 PM"
  ];

  const daysInMonth = (monthIndex: number, year: number) => new Date(year, monthIndex + 1, 0).getDate();

  const generateCalendar = () => {
    const today = new Date();
    const year = today.getFullYear();
    const firstDay = new Date(year, currentMonthIndex, 1).getDay(); // 0 = Sunday
    const totalDays = daysInMonth(currentMonthIndex, year);

    const calendarRows: number[][] = [];
    let week: number[] = [];
    for (let i = 0; i < firstDay; i++) week.push(0);
    for (let day = 1; day <= totalDays; day++) {
      week.push(day);
      if (week.length === 7) {
        calendarRows.push(week);
        week = [];
      }
    }
    if (week.length) while (week.length < 7) week.push(0);
    if (week.length) calendarRows.push(week);
    return calendarRows;
  };

  const calendarRows = generateCalendar();

  // Dynamic responsive direction
  const [isMobile, setIsMobile] = useState<boolean>(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const gradientBackground = `linear-gradient(to bottom, ${sidebarColors.join(", ")})`;
  const cardFlexDirection = isMobile ? "column" : "row";

  return (
    <div className="weekly-schedule" style={{ padding: "20px" }}>
      {/* Main Title */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <h1 style={{ fontSize: "2rem", margin: 0 }}>Schedule a Meeting</h1>
        <h2 style={{ fontSize: "1.1rem", marginTop: "5px" }}>with Brandon from Hubbard Labs</h2>
      </div>

      {/* Card */}
      <div
        className="card shadow"
        style={{
          display: "flex",
          flexDirection: cardFlexDirection,
          borderRadius: "8px",
          overflow: "hidden",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)"
        }}
      >
        {/* Left Column - Calendar */}
        <div
          className="calendar-column"
          style={{
            flex: 1,
            padding: "20px",
            background: gradientBackground,
            color: "#fff"
          }}
        >
          <div style={{ textAlign: "center" }}>
            <img
              src="https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-1677509740.jpg"
              alt="Avatar"
              style={{ borderRadius: "50%", border: "3px solid #fff", width: "60px", height: "60px" }}
            />
            <h5 style={{ marginTop: "10px" }}>Brandon from Hubbard Labs</h5>

            {/* Month Navigation */}
            <div style={{ margin: "20px 0" }}>
              <button
                style={{ background: "none", border: "none", color: "#fff", fontSize: "20px", cursor: "pointer" }}
                onClick={() => setCurrentMonthIndex(prev => prev === 0 ? 11 : prev - 1)}
              >
                &#8592;
              </button>
              <span style={{ margin: "0 10px" }}>{months[currentMonthIndex]}</span>
              <button
                style={{ background: "none", border: "none", color: "#fff", fontSize: "20px", cursor: "pointer" }}
                onClick={() => setCurrentMonthIndex(prev => prev === 11 ? 0 : prev + 1)}
              >
                &#8594;
              </button>
            </div>

            {/* Calendar Table */}
            <table style={{ width: "100%", textAlign: "center", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  {["SUN","MON","TUE","WED","THU","FRI","SAT"].map(day => (
                    <th key={day} style={{ padding: "8px 0", fontSize: isMobile ? "0.7rem" : "1rem" }}>{day}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {calendarRows.map((week, i) => (
                  <tr key={i}>
                    {week.map((day, idx) => (
                      <td key={idx} style={{ padding: "5px 0" }}>
                        {day === 0 ? (
                          <span style={{ display: "inline-block", width: "40px", height: "40px" }}></span>
                        ) : (
                          <button
                            onClick={() => setSelectedDay(day)}
                            style={{
                              backgroundColor: selectedDay === day ? "#fff" : "#444",
                              color: selectedDay === day ? "#222" : "#fff",
                              borderRadius: "50%",
                              minWidth: "40px",
                              minHeight: "40px",
                              border: "none",
                              cursor: "pointer",
                            }}
                          >
                            {day}
                          </button>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Column - Meeting Options */}
        <div className="options-column" style={{ flex: 1, padding: "20px" }}>
          <h2 style={{ marginBottom: "15px" }}>How long do you need?</h2>
          <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", justifyContent: "space-between", marginBottom: "25px" }}>
            {["15 Minutes","30 Minutes","1 Hour"].map(duration => (
              <label key={duration} style={{ flex: 1, margin: isMobile ? "5px 0" : "0 5px" }}>
                <input
                  type="radio"
                  name="duration"
                  checked={selectedDuration === duration}
                  onChange={() => setSelectedDuration(duration)}
                  style={{ marginRight: "5px" }}
                />
                {duration}
              </label>
            ))}
          </div>

          <h2 style={{ marginBottom: "15px" }}>What time works best?</h2>
          <select style={{ width: "100%", padding: "8px", marginBottom: "20px" }}>
            <option>UTC -07:00 Pacific Time (US & Canada)</option>
            <option>UTC -08:00 Arizona Time (US & Canada)</option>
          </select>

          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: "10px",
            maxHeight: "300px",
            overflowY: "scroll"
          }}>
            {timeSlots.map(slot => (
              <button
                key={slot}
                onClick={() => setSelectedTime(slot)}
                style={{
                  padding: "10px",
                  border: selectedTime === slot ? "2px solid #222" : "1px solid #ccc",
                  borderRadius: "5px",
                  background: selectedTime === slot ? "#ddd" : "#fff",
                  cursor: "pointer",
                }}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
