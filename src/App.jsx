// src/App.jsx
import React, { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import Analytics from "./pages/Analytics";

import NavSidebar from "./components/NavSidebar";
import './App.css'

const App = () => {
    const [currentSection, setCurrentSection] = useState("Dashboard");

    const handleSectionChange = (section) => setCurrentSection(section);

    

    return (
        <div className="w-[100dvw] h-[100dvh]">
            <NavSidebar handleSectionChange={handleSectionChange} />
            <div className="ml-[60px] sm:ml-[205px]">
            {
                currentSection === "Dashboard" && <Dashboard />
            }
            {
                currentSection === "Tasks" && <Tasks />
            }
            {
                currentSection === "Tasks" && <Analytics />
            }
            </div>
        </div>
    );
};

export default App;
