import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function AlertIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} {...props}>
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>
  );
}

export function ArrowRight(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} strokeWidth={2.2} {...props}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07c0 6 4.39 10.97 10.13 11.87v-8.4H7.08v-3.47h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.47h-2.8v8.4C19.61 23.04 24 18.07 24 12.07z" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function BurgerIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" {...props}>
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" {...props}>
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

export function PinIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} {...props}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} {...props}>
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} {...props}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

export function AwardIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="var(--orange)" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  );
}

export function PlayIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

export function ChevronUp(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} strokeWidth={2.2} {...props}>
      <path d="m18 15-6-6-6 6" />
    </svg>
  );
}

export function ChevronDown(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} strokeWidth={2.2} {...props}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function SurveyIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

export function PlaneIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} {...props}>
      <path d="M17.8 19.2 16 11l3.5-3.5a2.12 2.12 0 0 0-3-3L13 8 4.8 6.2a.5.5 0 0 0-.5.8l3.2 4-2 2-2.4-.6a.5.5 0 0 0-.5.8L5 17l1.8 2.4a.5.5 0 0 0 .8-.1l.6-2.4 2-2 4 3.2a.5.5 0 0 0 .8-.5Z" />
    </svg>
  );
}

export function BriefcaseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} {...props}>
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

export function FlagIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} {...props}>
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1Z" />
      <path d="M4 22v-7" />
    </svg>
  );
}

export function CalendarStarIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} {...props}>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
      <path d="m12 13 1 2 2 .3-1.5 1.4.4 2.1-1.9-1-1.9 1 .4-2.1L9 15.3 11 15Z" />
    </svg>
  );
}

export function PicnicIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} {...props}>
      <path d="M3 9h18" />
      <path d="M5 9l1.4 10.2A1 1 0 0 0 7.4 20h9.2a1 1 0 0 0 1-.8L19 9" />
      <path d="M8.5 9 10 3M15.5 9 14 3" />
      <path d="M9 13v4M15 13v4" />
    </svg>
  );
}

export function RingIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} {...props}>
      <path d="m8 3 4 4 4-4" />
      <path d="m8 3-2 3.4 6 3.6 6-3.6L16 3" />
      <circle cx="12" cy="15" r="6" />
    </svg>
  );
}

export function HeartIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} {...props}>
      <path d="M19 5.6a4.5 4.5 0 0 0-6.3 0L12 6.3l-.7-.7a4.5 4.5 0 0 0-6.4 6.3l.7.7L12 20l6.4-6.4.7-.7a4.5 4.5 0 0 0-.1-6.3Z" />
    </svg>
  );
}

export function WineIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} {...props}>
      <path d="M7 3h10l-.7 6.2A4.5 4.5 0 0 1 12 13a4.5 4.5 0 0 1-4.3-3.8Z" />
      <path d="M6.5 7h11" />
      <path d="M12 13v6M8 21h8" />
    </svg>
  );
}
