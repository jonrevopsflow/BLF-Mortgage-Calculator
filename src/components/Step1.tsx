import React from 'react';
import { LoanInputs } from '../types';

interface Step1Props {
  inputs: LoanInputs;
  setInputs: (inputs: LoanInputs) => void;
  onNext: () => void;
}

export const Step1 = ({ inputs, setInputs, onNext }: Step1Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: name === 'startDate' ? value : Number(value) });
  };

  return (
    <div className="flex flex-col md:flex-row gap-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="w-full md:w-1/3 flex flex-col gap-8">
        <div>
          <span className="text-primary font-bold text-sm tracking-widest uppercase mb-2 block">Step 1 of 3</span>
          <h1 className="font-headline text-on-surface text-4xl font-extrabold tracking-tight leading-tight">Loan Fundamentals</h1>
          <p className="text-on-surface-variant mt-4 text-lg font-light leading-relaxed">
            Establish the baseline for your financial journey. These core details define your current mortgage structure.
          </p>
        </div>
        
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center ring-4 ring-primary/10">
              <span className="font-bold">1</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-primary">Step 1</span>
              <span className="text-on-surface font-bold text-lg">Loan Fundamentals</span>
            </div>
          </div>
          <div className="flex items-center gap-4 opacity-40">
            <div className="w-10 h-10 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center">
              <span className="font-bold">2</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-on-surface-variant">Step 2</span>
              <span className="text-on-surface font-medium">Equity Acceleration</span>
            </div>
          </div>
          <div className="flex items-center gap-4 opacity-40">
            <div className="w-10 h-10 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center">
              <span className="font-bold">3</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-on-surface-variant">Step 3</span>
              <span className="text-on-surface font-medium">Payoff Forecast</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1">
        <div className="glass-card rounded-xl p-8 md:p-12 shadow-sm bg-white">
          <div className="flex flex-col gap-10">
            <h2 className="font-headline text-2xl font-bold text-primary">Loan Architecture</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <label className="font-headline font-semibold text-sm text-on-surface">Original Principal</label>
                <div className="relative flex items-center">
                  <span className="absolute left-4 text-on-surface-variant font-medium">$</span>
                  <input
                    name="principal"
                    type="number"
                    value={inputs.principal}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-surface-container-low border-none rounded-xl text-lg font-bold focus:ring-2 focus:ring-primary/40"
                    placeholder="425,000"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-headline font-semibold text-sm text-on-surface">Interest Rate (%)</label>
                <input
                  name="interestRate"
                  type="number"
                  step="0.1"
                  value={inputs.interestRate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-surface-container-low border-none rounded-xl text-lg font-bold focus:ring-2 focus:ring-primary/40"
                  placeholder="6.25"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-headline font-semibold text-sm text-on-surface">Loan Term (Years)</label>
                <select
                  name="loanTerm"
                  value={inputs.loanTerm}
                  onChange={(e) => setInputs({ ...inputs, loanTerm: Number(e.target.value) })}
                  className="w-full px-4 py-3 bg-surface-container-low border-none rounded-xl text-lg font-bold focus:ring-2 focus:ring-primary/40"
                >
                  <option value={30}>30 Years</option>
                  <option value={20}>20 Years</option>
                  <option value={15}>15 Years</option>
                  <option value={10}>10 Years</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-headline font-semibold text-sm text-on-surface">Start Date</label>
                <input
                  name="startDate"
                  type="month"
                  value={inputs.startDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-surface-container-low border-none rounded-xl text-lg font-bold focus:ring-2 focus:ring-primary/40"
                />
              </div>
            </div>

            <div className="pt-8 flex justify-end">
              <button
                onClick={onNext}
                className="primary-gradient px-12 py-4 text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                Continue to Step 2
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
