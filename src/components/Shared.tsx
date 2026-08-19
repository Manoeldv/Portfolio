import React from 'react';

export const SectionHeader = ({ title, underlineColor = "bg-primary" }: { title: string, underlineColor?: string }) => (
  <div className="mb-10 md:mb-12">
    <h2 className="font-display text-2xl md:text-3xl text-text-main mb-4 font-bold tracking-tight">{title}</h2>
    <div className={`w-12 h-1 rounded ${underlineColor}`}></div>
  </div>
);

export const Chip: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="chip">{children}</span>
);
