import { useState } from "react";
import { motion } from "framer-motion";
import {
    DashboardIcon,
    TasksIcon,
    DarkModeIcon,
    LightModeIcon,
    AnalyticsIcon,
    SettingIcon,
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
        <motion.nav className="fixed top-0 bg-[#171717] h-full w-[50px] sm:w-[220px] dark:bg-purple-500 text-white">
            <div className="flex content-center flex-wrap sm:flex-nowrap flex-col sm:pl-4 pt-5 h-full w-full relative">
                <div className="flex flex-col gap-5 ">
                    <div>
                        <h2 className=" text-[1em] sm:text-[2em]">Task</h2>
                    </div>
                    <div
                        onClick={() => handleSectionChange("Dashboard")}
                        className="flex gap-2 items-center cursor-pointer"
                    >
                        <svg className="w-8 h-8">{DashboardIcon}</svg>
                        <p className="hidden sm:block">Dashboard</p>
                    </div>
                    <div onClick={() => handleSectionChange('Tasks')} className="flex items-center gap-2 cursor-pointer">
                        <svg className="w-8 h-8">{TasksIcon}</svg>
                        <p className="hidden sm:block">Tasks</p>
                    </div>
                    <div onClick={() => handleSectionChange('Projects')} className="flex items-center gap-2 cursor-pointer">
                        <svg className="w-8 h-8">{SettingIcon}</svg>
                        <p className="hidden sm:block">Projects</p>
                    </div>
                    <div onClick={() => handleSectionChange('Analytics')} className="flex gap-2 items-center cursor-pointer">
                        <svg className="w-8 h-8">{AnalyticsIcon}</svg>
                        <p className="hidden sm:block">Analytics</p>
                    </div>
                    
                </div>
                <div
                    className="cursor-pointer  absolute bottom-5 -translate-x-[50%] left-[50%] sm:translate-x-0 sm:left-4"
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
