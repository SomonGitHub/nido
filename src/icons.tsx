import type { JSX, ComponentChildren } from "preact";

interface IconProps {
  size?: number;
  stroke?: number;
  fill?: string;
  style?: JSX.CSSProperties;
  children?: ComponentChildren;
}

export const Icon = ({ children, size = 24, stroke = 1.5, fill = "none", style }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={fill}
    stroke="currentColor"
    stroke-width={stroke}
    stroke-linecap="round"
    stroke-linejoin="round"
    style={style}
  >
    {children}
  </svg>
);

type P = Omit<IconProps, "children">;

export const IconLight = (p: P) => (
  <Icon {...p}>
    <path d="M9 18h6" />
    <path d="M10 21h4" />
    <path d="M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.5 1 2.5h6c0-1 .3-1.8 1-2.5A6 6 0 0 0 12 3Z" />
  </Icon>
);

export const IconLightOn = (p: P) => (
  <Icon {...p}>
    <path d="M9 18h6" />
    <path d="M10 21h4" />
    <path d="M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.5 1 2.5h6c0-1 .3-1.8 1-2.5A6 6 0 0 0 12 3Z" />
    <path d="M12 1v1M3 5l.5.5M21 5l-.5.5M19 11h1M4 11h1" stroke-width="1.2" />
  </Icon>
);

export const IconBell = (p: P) => (
  <Icon {...p}>
    <path d="M6 9a6 6 0 1 1 12 0c0 4 1.5 5.5 2 6H4c.5-.5 2-2 2-6Z" />
    <path d="M10 19a2 2 0 0 0 4 0" />
  </Icon>
);

export const IconSettings = (p: P) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1A1.7 1.7 0 0 0 9 19.4a1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1A1.7 1.7 0 0 0 4.6 9a1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z" />
  </Icon>
);

export const IconChevronRight = (p: P) => (
  <Icon {...p}>
    <path d="m9 6 6 6-6 6" />
  </Icon>
);

export const IconChevronUp = (p: P) => (
  <Icon {...p}>
    <path d="m6 15 6-6 6 6" />
  </Icon>
);

export const IconChevronDown = (p: P) => (
  <Icon {...p}>
    <path d="m6 9 6 6 6-6" />
  </Icon>
);

export const IconStop = (p: P) => (
  <Icon {...p}>
    <rect x="6" y="6" width="12" height="12" rx="1.5" />
  </Icon>
);

export const IconBlind = (p: P) => (
  <Icon {...p}>
    <rect x="4" y="3" width="16" height="2" rx="1" />
    <path d="M5 7h14M5 11h14M5 15h14" />
    <path d="M12 19v2" />
    <circle cx="12" cy="22" r="1" />
  </Icon>
);

export const IconPlug = (p: P) => (
  <Icon {...p}>
    <path d="M9 8V4M15 8V4" />
    <path d="M6 8h12v4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z" />
    <path d="M12 16v5" />
  </Icon>
);

export const IconDoor = (p: P) => (
  <Icon {...p}>
    <path d="M5 21V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v17" />
    <path d="M3 21h18" />
    <circle cx="15" cy="13" r="0.6" fill="currentColor" />
  </Icon>
);

export const IconSmoke = (p: P) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="4" stroke-dasharray="1 2" />
    <circle cx="12" cy="12" r="0.8" fill="currentColor" />
  </Icon>
);

export const IconWater = (p: P) => (
  <Icon {...p}>
    <path d="M12 3s-6 7-6 11a6 6 0 0 0 12 0c0-4-6-11-6-11Z" />
    <path d="M9 14a3 3 0 0 0 3 3" stroke-width="1.2" />
  </Icon>
);

export const IconSensor = (p: P) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="3" />
    <circle cx="12" cy="12" r="7" stroke-dasharray="2 3" />
    <path d="M12 2v2M12 20v2M2 12h2M20 12h2" />
  </Icon>
);

export const IconThermostat = (p: P) => (
  <Icon {...p}>
    <path d="M14 14.8V4a2 2 0 0 0-4 0v10.8a4 4 0 1 0 4 0Z" />
    <path d="M12 18a1 1 0 1 0-1-1" />
  </Icon>
);

export const IconHumidity = (p: P) => (
  <Icon {...p}>
    <path d="M12 3s-6 7-6 11a6 6 0 0 0 12 0c0-4-6-11-6-11Z" />
  </Icon>
);

export const IconWindow = (p: P) => (
  <Icon {...p}>
    <rect x="4" y="4" width="16" height="16" rx="1" />
    <path d="M12 4v16M4 12h16" />
  </Icon>
);

export const IconShield = (p: P) => (
  <Icon {...p}>
    <path d="M12 3 5 6v6c0 4.5 3 8 7 9 4-1 7-4.5 7-9V6l-7-3Z" />
  </Icon>
);

export const IconLock = (p: P) => (
  <Icon {...p}>
    <rect x="5" y="11" width="14" height="10" rx="2" />
    <path d="M8 11V7a4 4 0 0 1 8 0v4" />
  </Icon>
);

export const IconLockOpen = (p: P) => (
  <Icon {...p}>
    <rect x="5" y="11" width="14" height="10" rx="2" />
    <path d="M8 11V7a4 4 0 0 1 7.5-2" />
  </Icon>
);

export const IconVacuum = (p: P) => (
  <Icon {...p}>
    <circle cx="12" cy="13" r="8" />
    <circle cx="12" cy="13" r="3" />
    <path d="M12 5v3" />
  </Icon>
);

export const IconFlame = (p: P) => (
  <Icon {...p}>
    <path d="M12 3c1 3-2 4-2 7a4 4 0 0 0 8 0c0-1-.5-2-1-3 0 2-1 3-2 3 1-3-1-5-3-7Z" />
  </Icon>
);

export const IconSnowflake = (p: P) => (
  <Icon {...p}>
    <path d="M12 2v20M4 6l16 12M4 18 20 6" />
    <path d="M9 4l3 2 3-2M9 20l3-2 3 2" stroke-width="1.2" />
  </Icon>
);

export const IconMinus = (p: P) => (
  <Icon {...p}>
    <path d="M5 12h14" />
  </Icon>
);

export const IconPlus = (p: P) => (
  <Icon {...p}>
    <path d="M12 5v14M5 12h14" />
  </Icon>
);

export const IconPlay = (p: P) => (
  <Icon {...p}>
    <path d="M7 5v14l12-7Z" />
  </Icon>
);

export const IconHome = (p: P) => (
  <Icon {...p}>
    <path d="m3 12 9-8 9 8" />
    <path d="M5 10v10h14V10" />
  </Icon>
);

export const IconBattery = (p: P) => (
  <Icon {...p}>
    <rect x="3" y="8" width="16" height="8" rx="1.5" />
    <path d="M21 11v2" />
  </Icon>
);

export const IconBolt = (p: P) => (
  <Icon {...p}>
    <path d="m13 2-9 12h7l-2 8 9-12h-7l2-8Z" />
  </Icon>
);

export const IconSun = (p: P) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.4 1.4M17.6 17.6 19 19M5 19l1.4-1.4M17.6 6.4 19 5" />
  </Icon>
);

export const IconCloud = (p: P) => (
  <Icon {...p}>
    <path d="M7 18a4 4 0 0 1-.8-7.92A6 6 0 0 1 17.6 9.5 4.5 4.5 0 0 1 17 18H7Z" />
  </Icon>
);

export const IconCloudSun = (p: P) => (
  <Icon {...p}>
    <circle cx="8" cy="8" r="3" />
    <path d="M8 2v1.5M8 12.5V14M2 8h1.5M12.5 8H14M3.5 3.5l1 1M11.5 3.5l-1 1" />
    <path d="M11 18a3.5 3.5 0 0 1-.7-6.93A5 5 0 0 1 19.6 11.5 3.8 3.8 0 0 1 19 18H11Z" />
  </Icon>
);

export const IconCloudRain = (p: P) => (
  <Icon {...p}>
    <path d="M7 15a4 4 0 0 1-.8-7.92A6 6 0 0 1 17.6 6.5 4.5 4.5 0 0 1 17 15H7Z" />
    <path d="M9 18v2M13 18v3M17 18v2" />
  </Icon>
);

export const IconCloudSnow = (p: P) => (
  <Icon {...p}>
    <path d="M7 15a4 4 0 0 1-.8-7.92A6 6 0 0 1 17.6 6.5 4.5 4.5 0 0 1 17 15H7Z" />
    <path d="M8 19h.01M12 19h.01M16 19h.01M10 22h.01M14 22h.01" />
  </Icon>
);

export const IconCloudBolt = (p: P) => (
  <Icon {...p}>
    <path d="M7 15a4 4 0 0 1-.8-7.92A6 6 0 0 1 17.6 6.5 4.5 4.5 0 0 1 17 15H7Z" />
    <path d="m12 17-2 4h3l-1 3" />
  </Icon>
);

export const IconCloudFog = (p: P) => (
  <Icon {...p}>
    <path d="M7 13a4 4 0 0 1-.8-7.92A6 6 0 0 1 17.6 4.5 4.5 4.5 0 0 1 17 13H7Z" />
    <path d="M5 17h14M3 21h18" />
  </Icon>
);

export const IconWind = (p: P) => (
  <Icon {...p}>
    <path d="M3 8h12a3 3 0 1 0-3-3" />
    <path d="M3 13h17a3 3 0 1 1-3 3" />
    <path d="M3 18h9" />
  </Icon>
);

export const IconGauge = (p: P) => (
  <Icon {...p}>
    <path d="M4 16a8 8 0 1 1 16 0" />
    <path d="m12 16 4-5" />
    <circle cx="12" cy="16" r="0.8" fill="currentColor" />
  </Icon>
);

export const IconActivity = (p: P) => (
  <Icon {...p}>
    <path d="M3 12h4l3-8 4 16 3-8h4" />
  </Icon>
);

export const IconMusic = (p: P) => (
  <Icon {...p}>
    <path d="M9 18V5l11-2v13" />
    <circle cx="6" cy="18" r="3" />
    <circle cx="17" cy="16" r="3" />
  </Icon>
);

export const IconPause = (p: P) => (
  <Icon {...p}>
    <rect x="6" y="5" width="4" height="14" rx="1" />
    <rect x="14" y="5" width="4" height="14" rx="1" />
  </Icon>
);

export const IconSkipPrev = (p: P) => (
  <Icon {...p}>
    <path d="M19 5 9 12l10 7V5Z" />
    <path d="M5 5v14" />
  </Icon>
);

export const IconSkipNext = (p: P) => (
  <Icon {...p}>
    <path d="M5 5l10 7-10 7V5Z" />
    <path d="M19 5v14" />
  </Icon>
);

export const IconVolume = (p: P) => (
  <Icon {...p}>
    <path d="M4 9v6h4l5 4V5L8 9H4Z" />
    <path d="M16 8a5 5 0 0 1 0 8" />
  </Icon>
);

export const IconAlarm = (p: P) => (
  <Icon {...p}>
    <path d="M12 3 5 6v6c0 4.5 3 8 7 9 4-1 7-4.5 7-9V6l-7-3Z" />
    <path d="m9 12 2 2 4-4" />
  </Icon>
);

export const IconAlarmAway = (p: P) => (
  <Icon {...p}>
    <path d="M12 3 5 6v6c0 4.5 3 8 7 9 4-1 7-4.5 7-9V6l-7-3Z" />
    <circle cx="12" cy="11" r="2" />
    <path d="M8 17a4 4 0 0 1 8 0" />
  </Icon>
);

export const IconAlarmNight = (p: P) => (
  <Icon {...p}>
    <path d="M12 3 5 6v6c0 4.5 3 8 7 9 4-1 7-4.5 7-9V6l-7-3Z" />
    <path d="M14 9a3 3 0 1 0 0 6 3 3 0 0 1-3-3 3 3 0 0 1 3-3Z" />
  </Icon>
);

export const IconCamera = (p: P) => (
  <Icon {...p}>
    <path d="M4 8h3l2-3h6l2 3h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z" />
    <circle cx="12" cy="13" r="3.5" />
  </Icon>
);

export const IconFan = (p: P) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="1.5" />
    <path d="M12 10.5c0-3 1-6 4-6 2 0 3 1.5 3 3 0 2-1.5 3-3 3" />
    <path d="M13.5 12c3 0 6 1 6 4 0 2-1.5 3-3 3-2 0-3-1.5-3-3" />
    <path d="M12 13.5c0 3-1 6-4 6-2 0-3-1.5-3-3 0-2 1.5-3 3-3" />
    <path d="M10.5 12c-3 0-6-1-6-4 0-2 1.5-3 3-3 2 0 3 1.5 3 3" />
  </Icon>
);

export const IconSparkles = (p: P) => (
  <Icon {...p}>
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
    <path d="m6 6 2 2M16 16l2 2M6 18l2-2M16 8l2-2" />
    <circle cx="12" cy="12" r="2" />
  </Icon>
);

export const IconArrowRight = (p: P) => (
  <Icon {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Icon>
);

export const IconArrowUpRight = (p: P) => (
  <Icon {...p}>
    <path d="M7 17 17 7" />
    <path d="M8 7h9v9" />
  </Icon>
);

export const IconArrowLeft = (p: P) => (
  <Icon {...p}>
    <path d="M19 12H5M11 6l-6 6 6 6" />
  </Icon>
);

export const IconCheck = (p: P) => (
  <Icon {...p}>
    <path d="m5 12 5 5 9-11" />
  </Icon>
);

export const IconStar = (p: P) => (
  <Icon {...p}>
    <path d="m12 3 2.7 5.7 6.3.9-4.5 4.4 1 6.3-5.5-2.9-5.5 2.9 1-6.3L3 9.6l6.3-.9L12 3Z" />
  </Icon>
);

export const IconSearch = (p: P) => (
  <Icon {...p}>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5" />
  </Icon>
);

export const IconX = (p: P) => (
  <Icon {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </Icon>
);

export const IconStarFilled = (p: P) => (
  <Icon {...p} fill="currentColor">
    <path d="m12 3 2.7 5.7 6.3.9-4.5 4.4 1 6.3-5.5-2.9-5.5 2.9 1-6.3L3 9.6l6.3-.9L12 3Z" />
  </Icon>
);

export const IconMoon = (p: P) => (
  <Icon {...p}>
    <path d="M20 14a8 8 0 1 1-9.5-9.5A6 6 0 0 0 20 14Z" />
  </Icon>
);

export const IconShieldCheck = (p: P) => (
  <Icon {...p}>
    <path d="M12 3 5 6v6c0 4.5 3 8 7 9 4-1 7-4.5 7-9V6l-7-3Z" />
    <path d="m9 12 2 2 4-4" />
  </Icon>
);

export const IconUser = (p: P) => (
  <Icon {...p}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21a8 8 0 0 1 16 0" />
  </Icon>
);

export const IconNest = (p: P) => (
  <Icon {...p}>
    <path d="M3 16c2-3 6-5 9-5s7 2 9 5" />
    <path d="M5 16c1.5-2.5 4-4 7-4s5.5 1.5 7 4" />
    <circle cx="12" cy="13" r="1.5" fill="currentColor" />
  </Icon>
);

export const IconChevronLeft = (p: P) => (
  <Icon {...p}>
    <path d="m15 6-6 6 6 6" />
  </Icon>
);

export const IconMore = (p: P) => (
  <Icon {...p}>
    <circle cx="6" cy="12" r="1.2" fill="currentColor" />
    <circle cx="12" cy="12" r="1.2" fill="currentColor" />
    <circle cx="18" cy="12" r="1.2" fill="currentColor" />
  </Icon>
);

export const IconCouch = (p: P) => (
  <Icon {...p}>
    <path d="M4 12.8a1.9 1.9 0 0 1 3.8 0V15h8.4v-2.2a1.9 1.9 0 0 1 3.8 0V18H4v-5.2Z" />
    <path d="M6.6 12.2V8.6A2.6 2.6 0 0 1 9.2 6h5.6a2.6 2.6 0 0 1 2.6 2.6v3.6" />
    <path d="M6 18v2M18 18v2" />
  </Icon>
);

export const IconBed = (p: P) => (
  <Icon {...p}>
    <path d="M3 20V8.5" />
    <path d="M3 13h12a6 6 0 0 1 6 6v1" />
    <path d="M3 17h18" />
    <rect x="4.6" y="9.6" width="5.4" height="3.4" rx="1.2" />
  </Icon>
);

export const IconFork = (p: P) => (
  <Icon {...p}>
    <path d="M7 3v6a2 2 0 0 0 2 2h0v10" />
    <path d="M11 3v6" />
    <path d="M16 3c-1 2-1 4 0 6 1 1 1 3 0 4v8" />
  </Icon>
);

export const IconFridge = (p: P) => (
  <Icon {...p}>
    <rect x="6" y="2" width="12" height="20" rx="2" />
    <path d="M6 9.5h12" />
    <path d="M15 4.6v3" />
    <path d="M15 11.6v3.4" />
  </Icon>
);

export const IconBath = (p: P) => (
  <Icon {...p}>
    <path d="M3 12.4h18v2.1a4.5 4.5 0 0 1-4.5 4.5h-9A4.5 4.5 0 0 1 3 14.5v-2.1Z" />
    <path d="M7 12.4V6.4A2.4 2.4 0 0 1 11.8 6" />
    <path d="M6 19v1.8M18 19v1.8" />
  </Icon>
);

export const IconDoorRoom = (p: P) => (
  <Icon {...p}>
    <path d="M6 21V4.4A1.4 1.4 0 0 1 7.4 3h9.2A1.4 1.4 0 0 1 18 4.4V21" />
    <path d="M3 21h18" />
    <path d="M9 7.5h6" />
    <circle cx="15" cy="13" r="1" />
  </Icon>
);

export const IconToilet = (p: P) => (
  <Icon {...p}>
    <rect x="5.4" y="2.6" width="6" height="4.6" rx="1.1" />
    <path d="M8.4 7.2v2.2" />
    <path d="M3.8 9.4h12.4v1.8a4.8 4.8 0 0 1-4.8 4.8H8.6a4.8 4.8 0 0 1-4.8-4.8V9.4Z" />
    <path d="M10 16v3.6M6.8 19.6h6.4" />
  </Icon>
);

export const IconWasher = (p: P) => (
  <Icon {...p}>
    <rect x="4" y="2.6" width="16" height="18.8" rx="2.2" />
    <path d="M4 7.6h16" />
    <circle cx="12" cy="14.6" r="4.2" />
    <circle cx="16.6" cy="5.1" r="0.9" />
  </Icon>
);

export const IconDressing = (p: P) => (
  <Icon {...p}>
    <path d="M13.6 5.8a1.6 1.6 0 1 0-1.6 1.6v4.8" />
    <path d="m12 12.2-8.4 7.4h16.8L12 12.2" />
  </Icon>
);

export const IconGarage = (p: P) => (
  <Icon {...p}>
    <path d="M3 21V9.6L12 4l9 5.6V21" />
    <path d="M6.6 21v-8h10.8v8" />
    <path d="M6.6 16.4h10.8M6.6 18.8h10.8" />
  </Icon>
);

export const IconDesk = (p: P) => (
  <Icon {...p}>
    <rect x="3" y="4.2" width="18" height="11.2" rx="1.6" />
    <path d="M12 15.4v3.2" />
    <path d="M8 18.6h8" />
  </Icon>
);

export const IconStairs = (p: P) => (
  <Icon {...p}>
    <path d="M3 19.2v-3.6h4.5V12H12V8.4h4.5V4.8H21v14.4H3Z" />
  </Icon>
);

export const IconTree = (p: P) => (
  <Icon {...p}>
    <path d="M12 3.6c-2.5 0-4.4 1.7-4.6 3.8-2 .5-3 2.2-2.5 4 .4 1.6 1.8 2.8 3.5 2.8h7.2c1.7 0 3.1-1.2 3.5-2.8.5-1.8-.5-3.5-2.5-4-.2-2.1-2.1-3.8-4.6-3.8Z" />
    <path d="M12 14.2V21" />
    <path d="M12 18.4 9.2 15.8M12 17.2l2.6-2.2" />
  </Icon>
);

export const IconWine = (p: P) => (
  <Icon {...p}>
    <path d="M10 2.8h4v3.8l2 2.8a3.2 3.2 0 0 1 .6 1.9V19a2.2 2.2 0 0 1-2.2 2.2H9.6A2.2 2.2 0 0 1 7.4 19v-7.7a3.2 3.2 0 0 1 .6-1.9l2-2.8V2.8Z" />
    <path d="M7.4 13.4h9.2M7.4 17h9.2" />
  </Icon>
);

export const IconDining = (p: P) => (
  <Icon {...p}>
    <rect x="5" y="8.8" width="14" height="6.4" rx="2" />
    <rect x="6.8" y="4.2" width="4" height="3" rx="1" />
    <rect x="13.2" y="4.2" width="4" height="3" rx="1" />
    <rect x="6.8" y="16.8" width="4" height="3" rx="1" />
    <rect x="13.2" y="16.8" width="4" height="3" rx="1" />
  </Icon>
);

export const IconPlant = (p: P) => (
  <Icon {...p}>
    <path d="M5.6 12.6h12.8l-1.3 7.2a1.7 1.7 0 0 1-1.7 1.4H8.6a1.7 1.7 0 0 1-1.7-1.4L5.6 12.6Z" />
    <path d="M12 12.6V6.4" />
    <path d="M12 10.2C8.8 10.2 7.4 8 7.7 5.2c2.7-.3 4.3 1.5 4.3 5Z" />
    <path d="M12 11c3 0 4.3-2 4-4.6-2.6-.3-4 1.4-4 4.6Z" />
  </Icon>
);

export const IconTeddy = (p: P) => (
  <Icon {...p}>
    <circle cx="6.9" cy="6.9" r="2.3" />
    <circle cx="17.1" cy="6.9" r="2.3" />
    <circle cx="12" cy="13" r="6.2" />
    <circle cx="9.9" cy="11.8" r="0.75" fill="currentColor" stroke="none" />
    <circle cx="14.1" cy="11.8" r="0.75" fill="currentColor" stroke="none" />
    <path d="M10.4 15.4a2.2 2.2 0 0 0 3.2 0" />
  </Icon>
);

export const IconAlertTriangle = (p: P) => (
  <Icon {...p}>
    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
    <path d="M12 9v4" />
    <path d="M12 17h.01" />
  </Icon>
);

export const IconUmbrella = (p: P) => (
  <Icon {...p}>
    <path d="M22 12a10.06 10.06 1 0 0-20 0Z" />
    <path d="M12 12v8a2 2 0 0 0 4 0" />
    <path d="M12 2v1" />
  </Icon>
);

export const IconDroplet = (p: P) => (
  <Icon {...p}>
    <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
  </Icon>
);

export const IconSunHigh = (p: P) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
  </Icon>
);

export const IconInfo = (p: P) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </Icon>
);

export const IconSuccess = (p: P) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="10" />
    <path d="m9 12 2 2 4-4" />
  </Icon>
);

export const IconCalendar = (p: P) => (
  <Icon {...p}>
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
  </Icon>
);

export const IconPower = (p: P) => (
  <Icon {...p}>
    <path d="M18.36 6.64a9 9 0 1 1-12.73 0" />
    <line x1="12" y1="2" x2="12" y2="12" />
  </Icon>
);

export const IconNotebook = (p: P) => (
  <Icon {...p}>
    <path d="M6 3h11a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
    <path d="M9 7h6M9 11h6M9 15h4" />
    <path d="M5 7h2M5 11h2M5 15h2" />
  </Icon>
);

export const IconFloorPlan = (p: P) => (
  <Icon {...p}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M3 12h8v9M11 3v5M15 12h6" />
  </Icon>
);

export const IconCards = (p: P) => (
  <Icon {...p}>
    <rect x="3" y="3" width="7.5" height="7.5" rx="2" />
    <rect x="13.5" y="3" width="7.5" height="7.5" rx="2" />
    <rect x="3" y="13.5" width="7.5" height="7.5" rx="2" />
    <rect x="13.5" y="13.5" width="7.5" height="7.5" rx="2" />
  </Icon>
);

export const IconFit = (p: P) => (
  <Icon {...p}>
    <path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" />
  </Icon>
);

export const IconEdit = (p: P) => (
  <Icon {...p}>
    <path d="M4 20h4L19 9a2.8 2.8 0 0 0-4-4L4 16v4Z" />
    <path d="m13.5 6.5 4 4" />
  </Icon>
);

export const IconTrash = (p: P) => (
  <Icon {...p}>
    <path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3" />
  </Icon>
);

export const IconLShape = (p: P) => (
  <Icon {...p}>
    <path d="M3 3h10v8h8v10H3z" />
  </Icon>
);

export const IconPin = (p: P) => (
  <Icon {...p}>
    <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </Icon>
);
