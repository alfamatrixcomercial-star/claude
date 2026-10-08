import type { ReactNode, SVGProps } from "react";
import type { CategoryIcon } from "@/types/menu";

type IconProps = SVGProps<SVGSVGElement>;

// Line icons drawn for Mirador Waikiki: 24×24 grid, 1.6 stroke, round caps.
function Line({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export const MenuIcon = (p: IconProps) => (
  <Line {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Line>
);

export const CloseIcon = (p: IconProps) => (
  <Line {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </Line>
);

export const ChevronDownIcon = (p: IconProps) => (
  <Line {...p}>
    <path d="M6 9l6 6 6-6" />
  </Line>
);

export const ChevronLeftIcon = (p: IconProps) => (
  <Line {...p}>
    <path d="M15 6l-6 6 6 6" />
  </Line>
);

export const ChevronRightIcon = (p: IconProps) => (
  <Line {...p}>
    <path d="M9 6l6 6-6 6" />
  </Line>
);

export const ArrowLeftIcon = (p: IconProps) => (
  <Line {...p}>
    <path d="M19 12H5M11 6l-6 6 6 6" />
  </Line>
);

const starPath =
  "M12 3.4L14.29 9.44 20.75 9.76 15.71 13.81 17.41 20.04 12 16.5 6.59 20.04 8.29 13.81 3.25 9.76 9.71 9.44Z";

export const StarIcon = ({ filled = false, ...p }: IconProps & { filled?: boolean }) => (
  <Line {...p} fill={filled ? "currentColor" : "none"}>
    <path d={starPath} />
  </Line>
);

const heartPath = "M12 20C8 17.5 4 14.5 4 10.25A4.2 4.2 0 0 1 12 8 4.2 4.2 0 0 1 20 10.25C20 14.5 16 17.5 12 20Z";

export const HeartIcon = ({ filled = false, ...p }: IconProps & { filled?: boolean }) => (
  <Line {...p} fill={filled ? "currentColor" : "none"}>
    <path d={heartPath} />
  </Line>
);

export const TrashIcon = (p: IconProps) => (
  <Line {...p}>
    <path d="M4 7h16M9 7V4.5h6V7M6 7l1 13h10l1-13M10 11v5.5M14 11v5.5" />
  </Line>
);

const categoryPaths: Record<CategoryIcon, ReactNode> = {
  ejecutivo: <path d="M5 3v4a2 2 0 0 0 4 0V3M7 3v18M17 21V3c-1.7 1.5-2.5 4.5-2.5 8.5H17" />,
  cafe: (
    <path d="M4 9h12v4a6 6 0 0 1-12 0V9zM16 10h1.5a2.5 2.5 0 0 1 0 5H16M3 21h16M8 3c-.8 1 .8 2 0 3M12 3c-.8 1 .8 2 0 3" />
  ),
  pasteleria: (
    <path d="M4 11h16v9H4zM4 15c2.7 1.3 5.3 1.3 8 0s5.3-1.3 8 0M2 20h20M12 11V8M12 5.6c-.9-.8-.9-1.8 0-2.6.9.8.9 1.8 0 2.6z" />
  ),
  entradas: (
    <path d="M3 12h18a9 9 0 0 1-18 0zM9.5 9.5c0-2.4 1.6-4 4-4 0 2.4-1.6 4-4 4zM9.5 9.5l2-2M15.5 9.5c.4-1.5 1.7-2.5 3.5-2.5" />
  ),
  platos: <path d="M2.5 19h19M4.5 19a7.5 7.5 0 0 1 15 0M12 11.5V10M10.5 9.2a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0z" />,
  infantil: (
    <path d="M12 3a5 5 0 0 1 5 5c0 3.2-2.6 5.8-5 6.8C9.6 13.8 7 11.2 7 8a5 5 0 0 1 5-5zM11 15.3h2M12 15.3c-1.2 2 1.2 3.2 0 5.7" />
  ),
  postres: <path d="M7 10a5 5 0 0 1 10 0M6 10h12M7.2 10L12 21l4.8-11M9.5 13.5l4.2 2.6M10.7 17l3-1.9" />,
  bebidas: <path d="M6 7h12l-1.5 13h-9zM6.6 12h10.8M13 7l2.4-4.5H18" />,
  cocktails: <path d="M4 4h16l-8 9zM12 13v7M8 20.5h8M8.6 7.6l3.4-.1M10.3 7.5a1.2 1.2 0 1 0 0 .1" />,
  bodega: (
    <path d="M8.5 2.5h2V6c0 1 2 1.6 2 3.5V21h-6V9.5c0-1.9 2-2.5 2-3.5zM6.5 13h6M15 9h5c0 3-1.1 4.5-2.5 4.5S15 12 15 9zM17.5 13.5V20.5M15.5 20.5h4" />
  ),
};

export const CategoryGlyph = ({ icon, ...p }: IconProps & { icon: CategoryIcon }) => (
  <Line {...p}>{categoryPaths[icon]}</Line>
);
