import * as React from "react";

interface StatChipProps {
  label: string;
  value: string;
}

const StatChip: React.FC<StatChipProps> = ({ label, value }) => (
  <div className="flex flex-col items-start px-5 py-3 rounded-2xl bg-white/20 backdrop-blur-sm text-white shadow-pop">
    <span className="text-2xl font-display font-bold leading-none">{value}</span>
    <span className="text-xs font-semibold opacity-90 mt-1">{label}</span>
  </div>
);

export default StatChip;
