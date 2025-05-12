'use client'
import { useState } from 'react';
import { Toggle } from './Toggle';

type StepToggleProps = {
    activeStep: string;
    onClick?: () => void;
}

const steps = [
    {id: '1', content: '1. Step'},
    {id: '2', content: '2. Step'},
    {id: '3', content: '3. Step'}
];

export const StepToggle = ({activeStep = '1', onClick}: StepToggleProps) => {
     const [currentStep, setCurrentStep] = useState(activeStep ?? '1');
    
    const onClickInternal = (id: string) => {
        setCurrentStep(id)
        onClick?.()
    }

     return (
         <Toggle
             items={steps}
             activeId={currentStep}
             onClick={onClickInternal}
         />
     );
 };