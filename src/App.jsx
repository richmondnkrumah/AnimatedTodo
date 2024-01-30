// src/App.jsx
import React, { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import Analytics from "./pages/Analytics";
import Projects from './pages/Projects'

import NavSidebar from "./components/NavSidebar";
import './App.css'

const App = () => {
    const [currentSection, setCurrentSection] = useState("Dashboard");

    const handleSectionChange = (section) => setCurrentSection(section);

    

    return (
        <div className="w-[100dvw] h-[100dvh]">
            <NavSidebar handleSectionChange={handleSectionChange} />
            <div className="ml-[60px] py-5 h-full sm:ml-[200px] sm:px-5 mr-[10px] sm:mr-0">
            {
                currentSection === "Dashboard" && <Dashboard />
            }
            {
                currentSection === "Tasks" && <Tasks />
            }
               {
                currentSection === "Projects" && <Projects />
            }
            {
                currentSection === "Analytics" && <Analytics />
            }
         
            </div>
        </div>
    );
};

export default App;
