'use client'
import Image from 'next/image';
import { useState } from 'react';
import { Toggle } from '.';

const steps = [
    {id: '1', content: '1. Step'},
    {id: '2', content: '2. Step'},
    {id: '3', content: '3. Step'}
];

export const GifToggle = () => {
     const [currentStep, setCurrentStep] = useState('1');
    
    const onClickInternal = (id: string) => {
        setCurrentStep(id)
    }

     return (
        <div>
            <Image
                src={`/test_gif/${currentStep}.gif`}
                alt={`Step ${currentStep} GIF`}
                width={200}
                height={200}
                priority
            />
            <Toggle
                items={steps}
                activeId={currentStep}
                onClick={onClickInternal}
            />
         </div>
     );
 };