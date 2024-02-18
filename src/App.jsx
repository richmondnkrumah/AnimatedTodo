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
        <div className="w-[100dvw] min-h-[100dvh]  max-h-fit bg-[#121212]">
            <NavSidebar handleSectionChange={handleSectionChange} currentSection={currentSection} />
            <div className="ml-[60px] bg-[#121212] py-5 h-full sm:ml-[220px] sm:px-5 mr-[10px] sm:mr-0">
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
