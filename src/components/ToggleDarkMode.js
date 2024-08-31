import React, { useEffect } from "react";
import { useDarkMode } from "../utils/DarkModeContext";
import "../css/theme-switch.css";

const ToggleDarkMode = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.setAttribute("darkMode", "");
    } else {
      document.documentElement.removeAttribute("darkMode", "");
    }
  }, [darkMode]);

  return (
    <div id="theme-switch" className="me-5">
      <div className="switch-track">
        <div className="switch-check">
          <span className="switch-icon">🌙</span>
        </div>
        <div className="switch-x">
          <span className="switch-icon">🌞</span>
        </div>
        <div className="switch-thumb"></div>
      </div>

      <input
        type="checkbox"
        checked={darkMode}
        onChange={toggleDarkMode}
        aria-label="Switch between dark and light mode"
      />
    </div>
  );
};

export default ToggleDarkMode;
