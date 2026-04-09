import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { CalculationResults, LoanInputs, AccelerationInputs } from '../types';

interface Step3Props {
  results: CalculationResults;
  loan: LoanInputs;
  acceleration: AccelerationInputs;
  onReset: () => void;
}

export const Step3 = ({ results, loan, acceleration, onReset }: Step3Props) => {
  const formatCurrency = (val: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);
  const formatDate = (date: Date) => date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });

  // Prepare chart data - sample every 12 months for performance and clarity
  const chartData = results.originalAmortization
    .filter((_, i) => i % 12 === 0 || i === results.originalAmortization.length - 1)
    .map((p, i) => {
      const acc = results.acceleratedAmortization.find(a => a.month === p.month);
      return {
        year: Math.floor(p.month / 12),
        original: p.balance,
        accelerated: acc ? acc.balance : 0,
      };
    });

  return (
    <div className="flex flex-col md:flex-row gap-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="w-full md:w-1/3 flex flex-col gap-8">
        <div>
          <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full font-bold text-xs tracking-widest uppercase mb-4 inline-block">
            <span className="material-symbols-outlined align-middle mr-1" style={{ fontSize: '14px' }}>check_circle</span>
            Step 3 of 3
          </span>
          <h1 className="font-headline text-on-surface text-4xl font-extrabold tracking-tight leading-tight">Success Forecast</h1>
          <p className="text-on-surface-variant mt-4 text-lg font-light leading-relaxed">
            Your architectural blueprint for financial freedom is complete. By optimizing your repayment structure, you've unlocked significant interest savings.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center">
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>check</span>
            </div>
            <div className="flex flex-col">
              <span className="text-on-surface font-medium">Loan Details</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center">
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>check</span>
            </div>
            <div className="flex flex-col">
              <span className="text-on-surface font-medium">Optimization</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center ring-4 ring-primary/10">
              <span className="font-bold">3</span>
            </div>
            <div className="flex flex-col">
              <span className="text-primary font-bold">Success Forecast</span>
            </div>
          </div>
        </div>

        <div className="bg-surface-container-low p-8 rounded-xl mt-4">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">description</span>
            </div>
            <div>
              <h4 className="font-bold text-on-surface">Plan Overview</h4>
              <p className="text-xs text-on-surface-variant">Conventional {loan.loanTerm}-Year Fixed</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between text-sm">
              <span className="text-on-surface-variant">Original Principal</span>
              <span className="font-bold">{formatCurrency(loan.principal)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-on-surface-variant">Interest Rate</span>
              <span className="font-bold">{loan.interestRate}%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-on-surface-variant">Monthly Extra</span>
              <span className="font-bold text-secondary">+{formatCurrency(acceleration.extraMonthly)}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col gap-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-surface-container">
            <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest block mb-2">Total Interest Saved</span>
            <span className="text-secondary font-headline text-3xl font-extrabold block mb-1">{formatCurrency(results.totalInterestSaved)}</span>
            <p className="text-[10px] text-on-surface-variant leading-tight">Lifetime savings vs. standard plan</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-surface-container">
            <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest block mb-2">Time Saved</span>
            <span className="text-primary font-headline text-3xl font-extrabold block mb-1">{results.timeSavedYears.toFixed(1)} Years</span>
            <p className="text-[10px] text-on-surface-variant leading-tight">Reduction in loan duration</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-surface-container">
            <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest block mb-2">New Payoff Date</span>
            <span className="text-on-surface font-headline text-3xl font-extrabold block mb-1">{formatDate(results.acceleratedPayoffDate)}</span>
            <p className="text-[10px] text-on-surface-variant leading-tight">Original: {formatDate(results.originalPayoffDate)}</p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm border border-surface-container flex-1 min-h-[400px] flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h3 className="font-headline text-xl font-bold text-on-surface">Loan Balance Projection</h3>
              <p className="text-xs text-on-surface-variant">Visualizing your path to 100% equity</p>
            </div>
            <div className="flex gap-4 text-[10px] font-bold uppercase tracking-tighter">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-slate-400"></div>
                <span>Original</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-secondary"></div>
                <span>Accelerated</span>
              </div>
            </div>
          </div>
          
          <div className="flex-1">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorOriginal" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#94a3b8" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#94a3b8" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorAccelerated" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0d6d2b" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#0d6d2b" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis 
                  dataKey="year" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fill: '#64748b' }}
                  tickFormatter={(val) => `YEAR ${val}`}
                />
                <YAxis hide />
                <Tooltip 
                  formatter={(value: number) => formatCurrency(value)}
                  labelFormatter={(label) => `Year ${label}`}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="original" 
                  stroke="#94a3b8" 
                  strokeWidth={2}
                  fillOpacity={1} 
                  fill="url(#colorOriginal)" 
                />
                <Area 
                  type="monotone" 
                  dataKey="accelerated" 
                  stroke="#0d6d2b" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorAccelerated)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-center">
          <button className="w-full md:w-auto primary-gradient px-8 py-4 text-white font-bold rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined">picture_as_pdf</span>
            Download PDF Report
          </button>
          
          <div className="relative group w-full md:w-auto">
            <button className="w-full md:w-auto bg-white border border-surface-container px-8 py-4 text-primary font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-surface-container-low transition-all">
              <span className="material-symbols-outlined">share</span>
              Share Report
            </button>
            <div className="absolute bottom-full left-0 mb-2 hidden group-hover:flex flex-col bg-white border border-surface-container rounded-xl shadow-xl p-2 min-w-[200px] z-20 animate-in fade-in slide-in-from-bottom-2">
              <button 
                onClick={() => {
                  const subject = encodeURIComponent("My Equity Flow Payoff Forecast");
                  const body = encodeURIComponent(`I'm projected to save ${formatCurrency(results.totalInterestSaved)} and payoff my mortgage ${results.timeSavedYears.toFixed(1)} years early!`);
                  window.location.href = `mailto:?subject=${subject}&body=${body}`;
                }}
                className="flex items-center gap-3 px-4 py-3 hover:bg-surface-container-low rounded-lg text-sm text-on-surface text-left"
              >
                <span className="material-symbols-outlined text-primary">mail</span>
                Share via Email
              </button>
              <button 
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  alert("Link copied to clipboard!");
                }}
                className="flex items-center gap-3 px-4 py-3 hover:bg-surface-container-low rounded-lg text-sm text-on-surface text-left"
              >
                <span className="material-symbols-outlined text-primary">link</span>
                Copy Shareable Link
              </button>
            </div>
          </div>

          <button className="w-full md:w-auto bg-surface-container-high px-8 py-4 text-on-surface font-bold rounded-xl flex items-center justify-center gap-2">
            <span className="material-symbols-outlined">table_chart</span>
            View Amortization Schedule
          </button>
          <button onClick={onReset} className="w-full md:w-auto ml-auto flex items-center gap-2 text-on-surface-variant font-bold hover:text-primary transition-colors">
            <span className="material-symbols-outlined">refresh</span>
            Start Over
          </button>
        </div>

        <div className="border-t border-dashed border-surface-container pt-8">
          <div className="bg-surface-container-low p-8 rounded-xl">
            <h4 className="font-bold text-on-surface mb-2">Architect's Note</h4>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Your forecast assumes consistent monthly extra payments of {formatCurrency(acceleration.extraMonthly)}. To further maximize your velocity, consider applying periodic windfalls (like tax returns or bonuses) directly to the principal. Even a single annual lump sum of {formatCurrency(acceleration.annualLumpSum)} could pull your payoff date forward by another {Math.floor(results.timeSavedYears * 0.2 * 12)} months.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
