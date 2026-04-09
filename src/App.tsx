import React, { useState, useMemo } from 'react';
import { Step1 } from './components/Step1';
import { Step2 } from './components/Step2';
import { Step3 } from './components/Step3';
import { LoanInputs, AccelerationInputs } from './types';
import { calculateMortgage } from './utils/calculations';

export default function App() {
  const [step, setStep] = useState(1);
  
  const [loanInputs, setLoanInputs] = useState<LoanInputs>({
    principal: 425000,
    interestRate: 6.25,
    loanTerm: 30,
    startDate: new Date().toISOString().slice(0, 7), // Current month
  });

  const [accelerationInputs, setAccelerationInputs] = useState<AccelerationInputs>({
    extraMonthly: 450,
    annualLumpSum: 0,
    annualLumpSumMonth: 0,
    oneTimeInjection: 0,
    oneTimeInjectionDate: new Date().toISOString().slice(0, 7),
  });

  const results = useMemo(() => {
    return calculateMortgage(loanInputs, accelerationInputs);
  }, [loanInputs, accelerationInputs]);

  return (
    <div className="min-h-screen bg-surface flex flex-col">
      <main className="flex-1 p-8 md:p-16 overflow-y-auto no-scrollbar">
        <div className="max-w-7xl mx-auto w-full">
          {step === 1 && (
            <Step1 
              inputs={loanInputs} 
              setInputs={setLoanInputs} 
              onNext={() => setStep(2)} 
            />
          )}
          {step === 2 && (
            <Step2 
              inputs={accelerationInputs} 
              setInputs={setAccelerationInputs} 
              results={results}
              onNext={() => setStep(3)}
              onBack={() => setStep(1)}
            />
          )}
          {step === 3 && (
            <Step3 
              results={results}
              loan={loanInputs}
              acceleration={accelerationInputs}
              onReset={() => {
                setStep(1);
                setAccelerationInputs({
                  extraMonthly: 0,
                  annualLumpSum: 0,
                  annualLumpSumMonth: 0,
                  oneTimeInjection: 0,
                  oneTimeInjectionDate: new Date().toISOString().slice(0, 7),
                });
              }}
            />
          )}
        </div>
      </main>
    </div>
  );
}
