import React, { useEffect, useState } from 'react';
import { Navbar } from './Navbar';
import AuthPage from '../components/Login/AuthPage';

export const OngPage = () => {
  const [darkMode, setDarkMode] = useState(() => {
    try {
      const savedMode = localStorage.getItem('darkMode');
      return savedMode !== null ? JSON.parse(savedMode) : false;
    } catch (error) {
      console.error("Error parsing JSON:", error);
      return false;
    }
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />    
      <div className={`pt-24 min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-[#F3F9F6]'}`}>
        <AuthPage darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </>
  );
};
