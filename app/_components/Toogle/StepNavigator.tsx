'use client'
import {useState} from 'react';
import {Toggle} from './Toogle';

type StepNavigatorProps = {
    darkMode?: boolean;
    activeStep?: string;
    onClick?: () => void;
}

const steps = [
    {id: '1', content: '1. Step'},
    {id: '2', content: '2. Step'},
    {id: '3', content: '3. Step'}
];

export const StepNavigator = ({darkMode = false, activeStep, onClick}: StepNavigatorProps) => {
     const [currentStep, setCurrentStep] = useState(activeStep ?? '1');
    
    const onChange = (id: string) => {
        setCurrentStep(id)
        onClick?.()
    }

     return (
         <Toggle
             items={steps}
             activeId={currentStep}
             onChange={onChange}
             darkMode={darkMode}
         />
     );
 };