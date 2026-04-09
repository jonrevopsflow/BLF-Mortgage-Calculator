import React from 'react';
import { AccelerationInputs, CalculationResults } from '../types';

interface Step2Props {
  inputs: AccelerationInputs;
  setInputs: (inputs: AccelerationInputs) => void;
  results: CalculationResults;
  onNext: () => void;
  onBack: () => void;
}

export const Step2 = ({ inputs, setInputs, results, onNext, onBack }: Step2Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: name === 'oneTimeInjectionDate' ? value : Number(value) });
  };

  const formatCurrency = (val: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(val);
  const formatDate = (date: Date) => date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });

  return (
    <div className="flex flex-col md:flex-row gap-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="w-full md:w-1/3 flex flex-col gap-8">
        <div>
          <span className="text-primary font-bold text-sm tracking-widest uppercase mb-2 block">Step 2 of 3</span>
          <h1 className="font-headline text-on-surface text-4xl font-extrabold tracking-tight leading-tight">Equity Acceleration</h1>
          <p className="text-on-surface-variant mt-4 text-lg font-light leading-relaxed">
            Strategically injecting capital into your principal balance doesn't just shorten your term—it erases future interest obligations entirely.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center">
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>check</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-on-surface-variant">Step 1</span>
              <span className="text-on-surface font-medium">Loan Fundamentals</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center ring-4 ring-primary/10">
              <span className="font-bold">2</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-primary">Step 2</span>
              <span className="text-on-surface font-bold text-lg">Equity Acceleration</span>
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

        <div className="bg-surface-container-low p-6 rounded-xl mt-4">
          <div className="flex items-start gap-3">
            <span className="material-symbols-outlined text-primary">info</span>
            <div>
              <h4 className="font-bold text-on-surface text-sm mb-1">Architect's Note</h4>
              <p className="text-xs text-on-surface-variant leading-normal italic">
                "Even small, consistent extra payments in the first five years of a mortgage have a disproportionately large impact due to how amortization curves function."
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1">
        <div className="glass-card rounded-xl p-8 md:p-12 shadow-sm bg-white relative overflow-hidden">
          <div className="flex flex-col gap-10">
            <div className="flex justify-between items-end">
              <h2 className="font-headline text-2xl font-bold text-primary">Payment Architecture</h2>
              <span className="text-xs font-semibold text-on-surface-variant uppercase tracking-tighter">Currency: USD</span>
            </div>

            <div className="grid grid-cols-1 gap-12">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <label className="font-headline font-semibold text-on-surface flex items-center gap-2">
                    Extra Monthly Payment
                    <span className="material-symbols-outlined text-outline text-lg cursor-help">help</span>
                  </label>
                  <span className="text-secondary font-bold text-sm">
                    + {formatCurrency(inputs.extraMonthly * 12)}/yr saved
                  </span>
                </div>
                <div className="relative flex items-center">
                  <span className="absolute left-4 text-on-surface-variant font-medium">$</span>
                  <input
                    name="extraMonthly"
                    type="number"
                    value={inputs.extraMonthly || ''}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-4 bg-surface-container-low border-none rounded-xl text-xl font-headline font-bold focus:ring-2 focus:ring-primary/40"
                    placeholder="0.00"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <label className="font-headline font-semibold text-on-surface flex items-center gap-2">
                    Annual Lump Sum
                    <span className="material-symbols-outlined text-outline text-lg cursor-help">help</span>
                  </label>
                  <select
                    name="annualLumpSumMonth"
                    value={inputs.annualLumpSumMonth}
                    onChange={handleChange}
                    className="bg-surface-container-high border-none rounded-lg text-xs font-bold text-primary focus:ring-0"
                  >
                    {['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'].map((m, i) => (
                      <option key={m} value={i}>EVERY {m}</option>
                    ))}
                  </select>
                </div>
                <div className="relative flex items-center">
                  <span className="absolute left-4 text-on-surface-variant font-medium">$</span>
                  <input
                    name="annualLumpSum"
                    type="number"
                    value={inputs.annualLumpSum || ''}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-4 bg-surface-container-low border-none rounded-xl text-xl font-headline font-bold focus:ring-2 focus:ring-primary/40"
                    placeholder="0.00"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <label className="font-headline font-semibold text-on-surface flex items-center gap-2">
                  One-Time Injection
                  <span className="material-symbols-outlined text-outline text-lg cursor-help">help</span>
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative flex items-center">
                    <span className="absolute left-4 text-on-surface-variant font-medium">$</span>
                    <input
                      name="oneTimeInjection"
                      type="number"
                      value={inputs.oneTimeInjection || ''}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-4 bg-surface-container-low border-none rounded-xl text-lg font-headline font-bold focus:ring-2 focus:ring-primary/40"
                      placeholder="Amount"
                    />
                  </div>
                  <div className="relative flex items-center">
                    <span className="absolute left-4 material-symbols-outlined text-on-surface-variant">calendar_today</span>
                    <input
                      name="oneTimeInjectionDate"
                      type="month"
                      value={inputs.oneTimeInjectionDate}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-4 bg-surface-container-low border-none rounded-xl text-lg font-headline font-bold focus:ring-2 focus:ring-primary/40"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-surface-container-highest/50">
              <div className="flex flex-col">
                <span className="text-xs text-on-surface-variant font-bold uppercase tracking-widest">Est. Interest Saved</span>
                <span className="text-secondary font-headline text-3xl font-extrabold">{formatCurrency(results.totalInterestSaved)}</span>
              </div>
              <div className="flex gap-4 w-full md:w-auto">
                <button onClick={onBack} className="flex-1 md:flex-none px-8 py-4 text-primary font-bold hover:bg-surface-container-high rounded-xl transition-all">
                  Back
                </button>
                <button onClick={onNext} className="flex-1 md:flex-none primary-gradient px-12 py-4 text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
                  Analyze Savings
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-surface-container-low p-6 rounded-xl flex flex-col gap-2">
            <span className="text-xs font-bold text-on-surface-variant uppercase tracking-tighter">Current Payoff</span>
            <span className="font-headline text-xl font-bold">{formatDate(results.originalPayoffDate)}</span>
          </div>
          <div className="bg-secondary-container/30 p-6 rounded-xl flex flex-col gap-2">
            <span className="text-xs font-bold text-secondary uppercase tracking-tighter">New Payoff</span>
            <span className="font-headline text-xl font-bold text-secondary">{formatDate(results.acceleratedPayoffDate)}</span>
          </div>
          <div className="bg-primary-container p-6 rounded-xl flex flex-col gap-2">
            <span className="text-xs font-bold text-white uppercase tracking-tighter">Time Saved</span>
            <span className="font-headline text-xl font-bold text-white">{results.timeSavedYears.toFixed(1)} Years</span>
          </div>
        </div>
      </div>
    </div>
  );
};
