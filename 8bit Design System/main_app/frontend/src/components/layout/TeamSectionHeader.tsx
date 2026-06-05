import * as React from "react";

interface TeamSectionHeaderProps {
  title: string;
  count: number;
  solidClass: string;
  noun?: string;
}

const TeamSectionHeader: React.FC<TeamSectionHeaderProps> = ({
  title,
  count,
  solidClass,
  noun = "member",
}) => (
  <div className={`${solidClass} text-white rounded-3xl px-6 sm:px-8 py-6 shadow-pop mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2`}>
    <div className="flex items-center gap-3">
      <span className="w-3 h-10 bg-white/40 rounded-full" />
      <h2 className="text-2xl sm:text-3xl font-display font-bold">{title}</h2>
    </div>
    <span className="text-sm font-bold bg-white/25 px-4 py-1.5 rounded-full">
      {count} {noun}
      {count !== 1 ? "s" : ""}
    </span>
  </div>
);

export default TeamSectionHeader;
