import { useState } from "react";
import { motion } from "framer-motion";
import {
    DashboardIcon,
    TasksIcon,
    DarkModeIcon,
    LightModeIcon,
    AnalyticsIcon,
} from "../assets/icons";

const NavSidebar = ({handleSectionChange}) => {
    const [darkMode, setDarkMode] = useState(false);
    
    if (darkMode) {
      document.documentElement.classList.add('dark')
    }
    else {
      document.documentElement.classList.remove('dark')
    }

    return (
        <motion.nav className="fixed top-0 h-full w-[50px] sm:w-[200px] dark:bg-purple-500 bg-amber-300">
            <div className="flex flex-col pl-3 h-full w-full">
                <div className="flex flex-col gap-3 ">
                    <div>
                        <h2 className=" text-[1em] sm:text-[2em]">Task</h2>
                    </div>
                    <div
                        onClick={() => handleSectionChange("Dashboard")}
                        className="flex items-center cursor-pointer"
                    >
                        <svg className="w-8 h-8">{DashboardIcon}</svg>
                        <p className="hidden sm:block">Dashboard</p>
                    </div>
                    <div onClick={() => handleSectionChange('Tasks')} className="flex items-center cursor-pointer">
                        <svg className="w-8 h-8">{TasksIcon}</svg>
                        <p className="hidden sm:block">Tasks</p>
                    </div>
                    <div onClick={() => handleSectionChange('Analytics')} className="flex items-center cursor-pointer">
                        <svg className="w-8 h-8">{AnalyticsIcon}</svg>
                        <p className="hidden sm:block">Analtics</p>
                    </div>
                </div>
                <div
                    className="cursor-pointer  absolute bottom-3"
                    onClick={() => setDarkMode((currentMode) => !currentMode)}
                >
                    <svg className="w-8 h-8">
                        {darkMode ? DarkModeIcon : LightModeIcon}
                    </svg>
                </div>
            </div>
        </motion.nav>
    );
};

export default NavSidebar;
