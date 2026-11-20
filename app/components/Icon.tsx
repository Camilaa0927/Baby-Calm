import type { ReactNode, SVGProps } from "react";

type IconName =
  | "arrow"
  | "bag"
  | "check"
  | "chevron"
  | "close"
  | "heart"
  | "instagram"
  | "mail"
  | "menu"
  | "minus"
  | "plus"
  | "shield"
  | "sparkles"
  | "sound"
  | "trash"
  | "whatsapp";

const icons: Record<IconName, ReactNode> = {
  arrow: <><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></>,
  bag: <><path d="M5 8h14l1 13H4L5 8Z" /><path d="M9 9V6a3 3 0 0 1 6 0v3" /><path d="M9 13v1m6-1v1" /></>,
  check: <><path d="m5 12 4 4L19 6" /></>,
  chevron: <><path d="m7 10 5 5 5-5" /></>,
  close: <><path d="m18 6-12 12M6 6l12 12" /></>,
  heart: <><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" /></>,
  instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5h.01" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
  menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
  minus: <><path d="M5 12h14" /></>,
  plus: <><path d="M12 5v14M5 12h14" /></>,
  shield: <><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" /><path d="m9 12 2 2 4-4" /></>,
  sparkles: <><path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3Z" /><path d="m19 14 1 2.5 2.5 1-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1 1-2.5Z" /></>,
  sound: <><path d="M3 10v4m4-7v10m4-13v16m4-12v8m4-6v4m3-3v2" /></>,
  trash: <><path d="M3 6h18m-2 0-.9 14H5.9L5 6m4 0V4h6v2m-5 4v7m4-7v7" /></>,
  whatsapp: <><path d="M20.5 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20l1.2-4.7A8.5 8.5 0 1 1 20.5 11.5Z" /><path d="M8.2 8.2c.2-.5.4-.5.7-.5h.5c.2 0 .4.1.5.4l.7 1.7c.1.2.1.4 0 .5l-.5.7c-.2.2-.2.4 0 .6.5.8 1.2 1.4 2.1 1.8.2.1.4.1.6-.1l.7-.9c.2-.2.4-.3.7-.2l1.6.8c.3.1.4.3.4.5-.1.7-.5 1.4-1.1 1.8-.5.3-1.1.5-1.8.4-1-.1-2.3-.6-3.6-1.7-1.6-1.4-2.6-3.1-2.7-4.2-.1-.6.1-1.2.4-1.6Z" /></>,
};

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
}

export default function Icon({ name, ...props }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
      viewBox="0 0 24 24"
      {...props}
    >
      {icons[name]}
    </svg>
  );
}
