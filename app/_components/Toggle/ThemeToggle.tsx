'use client'
import { useState } from 'react';
import { Toggle } from './Toggle';
import MoonIcon from '@/app/_icons/MoonIcon';
import SunIcon from '@/app/_icons/SunIcon';
import ComputerIcon from '@/app/_icons/ComputerIcon';
 
 export const ThemeToggle = () => {
     const [theme, setTheme] = useState('system');
 
     const handleThemeClick = (id: string) => {
         setTheme(id);
     };
    // TODO update this logic to affect theme to for whole app 
    
     return (
         <Toggle
             items={[
                 {
                     id: 'light',
                     content: (<ComputerIcon />)
                 },
                 {
                     id: 'system',
                     content: (<SunIcon />)
                 },
                 {
                     id: 'dark',
                     content: (<MoonIcon/> )
                 }
             ]}
             activeId={theme}
             onClick={handleThemeClick}
             className="w-fit"
         />
     );
 };