import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

// MUI ExpandMore — accordion chevron.
export function ExpandMoreIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
    </svg>
  );
}

// MUI Close — favorites dialog.
export function CloseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
    </svg>
  );
}

// MUI DeleteForever — remove a favorite.
export function DeleteForeverIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z" />
    </svg>
  );
}

// Font Awesome whatsapp-square (side menu).
export function WhatsappSquareIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 448 512" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M224 122.8c-72.7 0-131.8 59.1-131.9 131.8 0 24.9 7 49.2 20.2 70.1l3.1 5-13.3 48.6 49.9-13.1 4.8 2.9c20.2 12 43.4 18.4 67.1 18.4h.1c72.6 0 133.3-59.1 133.3-131.8 0-35.2-15.2-68.3-40.1-93.2-25-25-58-38.7-93.2-38.7zm77.5 188.4c-3.3 9.3-19.1 17.7-26.7 18.8-12.6 1.9-22.4.9-47.5-9.9-39.7-17.2-65.7-57.2-67.7-59.8-2-2.6-16.2-21.5-16.2-41s10.2-29.1 13.9-33.1c3.6-4 7.9-5 10.6-5 2.6 0 5.3 0 7.6.1 2.4.1 5.7-.9 8.9 6.8 3.3 7.9 11.2 27.4 12.2 29.4s1.7 4.3.3 6.9c-7.6 15.2-15.7 14.6-11.6 21.6 15.3 26.3 30.6 35.4 53.9 47.1 4 2 6.3 1.7 8.6-1 2.3-2.6 9.9-11.6 12.5-15.5 2.6-4 5.3-3.3 8.9-2 3.6 1.3 23.1 10.9 27.1 12.9s6.6 3 7.6 4.6c.9 1.9.9 9.9-2.4 19.1zM400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM223.9 413.2c-26.6 0-52.7-6.7-75.8-19.3L64 416l22.5-82.2c-13.9-24-21.2-51.3-21.2-79.3C65.4 167.1 136.5 96 223.9 96c42.4 0 82.2 16.5 112.2 46.5 29.9 30 47.9 69.8 47.9 112.2 0 87.4-72.7 158.5-160.1 158.5z" />
    </svg>
  );
}

// Brand icons drawn with currentColor so they follow the palette in globals.css.

export function CrossIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 41.5 41.51" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M24.91,20.75,40.64,5A2.94,2.94,0,1,0,36.48.86L20.75,16.6,5,.86A2.94,2.94,0,0,0,.86,5L16.59,20.75.86,36.49A2.94,2.94,0,0,0,5,40.65L20.75,24.91,36.48,40.65a2.94,2.94,0,1,0,4.16-4.16Z" />
    </svg>
  );
}

export function HamburgerIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 49.79 31.02" aria-hidden="true" fill="currentColor" {...props}>
      <rect width="49.79" height="3.83" rx="1.92" />
      <rect y="13.6" width="41.63" height="3.83" rx="1.92" />
      <rect y="27.19" width="49.79" height="3.83" rx="1.92" />
    </svg>
  );
}

const starPath =
  "M27.72,2.92l5.42,11a2.55,2.55,0,0,0,1.92,1.39l12.12,1.76a2.55,2.55,0,0,1,1.41,4.35L39.82,30a2.54,2.54,0,0,0-.73,2.25l2.07,12.08A2.55,2.55,0,0,1,37.46,47l-10.84-5.7a2.55,2.55,0,0,0-2.37,0L13.4,47a2.54,2.54,0,0,1-3.69-2.68l2.07-12.08A2.55,2.55,0,0,0,11,30L2.27,21.41a2.55,2.55,0,0,1,1.41-4.35L15.81,15.3a2.56,2.56,0,0,0,1.92-1.39l5.42-11A2.55,2.55,0,0,1,27.72,2.92Z";

export function StarOutlineIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 50.86 48.77" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth={3} {...props}>
      <path d={starPath} />
    </svg>
  );
}

export function StarFilledIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 50.86 48.77" aria-hidden="true" fill="currentColor" {...props}>
      <path d={starPath} />
    </svg>
  );
}

// MUI Favorite — top-bar favorites button.
export function HeartSolidIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}

// Category ring; the selected state adds the accent dot on top.
export function CategoryRing({ selected, ...props }: IconProps & { selected: boolean }) {
  return (
    <svg viewBox="0 0 118 125" aria-hidden="true" fill="none" {...props}>
      <circle cx="59" cy="66" r="57.5" stroke="var(--brand-primary)" strokeWidth={2.99} />
      {selected && <circle cx="59.5" cy="9.8" r="9.3" fill="var(--brand-accent)" stroke="var(--brand-primary)" />}
    </svg>
  );
}
