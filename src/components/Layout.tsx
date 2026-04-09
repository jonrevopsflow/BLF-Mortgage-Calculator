import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const Sidebar = () => {
  const navItems = [
    { id: 'overview', label: 'Overview', icon: 'dashboard' },
    { id: 'calculators', label: 'Inputs', icon: 'edit_note', active: true },
    { id: 'milestones', label: 'Milestones', icon: 'auto_graph' },
    { id: 'settings', label: 'Settings', icon: 'settings' },
  ];

  return (
    <aside className="hidden md:flex flex-col h-full bg-slate-100 dark:bg-slate-950 font-body text-xs uppercase tracking-widest font-semibold fixed left-0 top-16 w-64 shadow-sm">
      <div className="p-6 flex flex-col gap-1 mb-4">
        <span className="text-primary text-sm font-bold normal-case">Financial Architect</span>
        <span className="text-on-surface-variant text-[10px] tracking-normal">Premium Plan</span>
      </div>
      <nav className="flex flex-col gap-1">
        {navItems.map((item) => (
          <div
            key={item.id}
            className={cn(
              "flex items-center gap-3 px-4 py-3 transition-all mx-2 rounded-lg",
              item.active 
                ? "text-primary font-bold bg-white shadow-sm" 
                : "text-on-surface-variant opacity-50 cursor-not-allowed"
            )}
          >
            <span className="material-symbols-outlined">{item.icon}</span>
            <span>{item.label}</span>
          </div>
        ))}
      </nav>
    </aside>
  );
};

export const Topbar = () => {
  const topNav = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'calculators', label: 'Calculators', active: true },
    { id: 'amortization', label: 'Amortization' },
    { id: 'insights', label: 'Insights' },
  ];

  return (
    <nav className="bg-white font-headline text-sm font-medium tracking-tight flex justify-between items-center w-full px-8 py-4 fixed top-0 z-50 border-b border-surface-container">
      <div className="text-2xl font-bold text-primary tracking-tighter">Equity Flow</div>
      <div className="hidden md:flex items-center gap-8">
        {topNav.map((item) => (
          <span
            key={item.id}
            className={cn(
              "pb-1",
              item.active 
                ? "text-primary border-b-2 border-primary" 
                : "text-on-surface-variant opacity-50 cursor-not-allowed"
            )}
          >
            {item.label}
          </span>
        ))}
      </div>
      <button className="primary-gradient text-white px-6 py-2 rounded-md font-semibold text-sm transition-all hover:opacity-90 active:scale-[0.98]">
        Save Plan
      </button>
    </nav>
  );
};
