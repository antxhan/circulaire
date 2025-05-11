'use client'
import {useState} from 'react';
import {Toggle} from './Toogle';
import MoonIcon from '@/app/_icons/MoonIcon';
import SunIcon from '@/app/_icons/SunIcon';
import ComputerIcon from '@/app/_icons/ComputerIcon';
 
 export const ThemeToggle = () => {
     const [theme, setTheme] = useState('system');
     const [isDarkMode, setIsDarkMode] = useState(false);
 
     const handleThemeChange = (id: string) => {
         setTheme(id);
 
         if (id === 'dark') {
             setIsDarkMode(true);
         } else if (id === 'light') {
             setIsDarkMode(false);
         } else {
             setIsDarkMode(false);
         }
     };
    // TODO update this logic to affect theme to for whole app 
    
     return (
         <Toggle
             items={[
                 {
                     id: 'light',
                     content: (
                         <div className="flex items-center justify-center w-5 rounded-full">
                             <ComputerIcon />
                         </div>
                     )
                 },
                 {
                     id: 'system',
                     content: (
                         <div className="flex items-center justify-center w-5 rounded-full">
                             <SunIcon />
                         </div>
                     )
                 },
                 {
                     id: 'dark',
                     content: (
                         <div className="flex items-center justify-center w-5 rounded-full">
                             <MoonIcon/>
                         </div>
                     )
                 }
             ]}
             activeId={theme}
             onChange={handleThemeChange}
             darkMode={isDarkMode}
             className="w-fit"
         />
     );
 };