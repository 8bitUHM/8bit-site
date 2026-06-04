export type MemberCategory = "software" | "leadership";

export type RoleName = "president" | "vice_president" | "treasurer" | "officer";

export const ROLE_LABELS: Record<RoleName, string> = {
  president: "President",
  vice_president: "Vice President",
  treasurer: "Treasurer",
  officer: "Officer",
};

export const ROLE_ORDER: RoleName[] = [
  "president",
  "vice_president",
  "treasurer",
  "officer",
];

export function isRoleName(role: string | null | undefined): role is RoleName {
  return (
    role === "president" ||
    role === "vice_president" ||
    role === "treasurer" ||
    role === "officer"
  );
}

export function isLeadershipRole(role: string | null | undefined): boolean {
  return isRoleName(role);
}

export const CATEGORY_LABEL: Record<MemberCategory, string> = {
  software: "Software Team",
  leadership: "Leadership",
};

export const CATEGORY_SWOOSH: Record<MemberCategory, string> = {
  software: "bg-gradient-mint",
  leadership: "bg-gradient-warm",
};

export const CATEGORY_SHADOW_HOVER: Record<MemberCategory, string> = {
  software: "hover:shadow-pop-primary",
  leadership: "hover:shadow-pop-warm",
};

export const CATEGORY_SOLID: Record<MemberCategory, string> = {
  software: "bg-primary-500",
  leadership: "bg-gradient-warm",
};

export const CATEGORY_BADGE: Record<MemberCategory, string> = {
  software:
    "bg-primary-100 text-primary-800 dark:bg-primary-900/40 dark:text-primary-200",
  leadership:
    "bg-bubble-100 text-bubble-800 dark:bg-bubble-900/40 dark:text-bubble-200",
};
