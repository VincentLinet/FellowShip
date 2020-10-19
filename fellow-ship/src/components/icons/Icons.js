import React from "react";

import SearchIcon from "./SearchIcon";

export default {
  SearchIcon
};

export const RefreshIcon = ({ ...props }) => (
  <SVGIcon {...props}>
    <path
      fill="currentColor"
      d="M17.65,6.35C16.2,4.9 14.21,4 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C15.73,20 18.84,17.45 19.73,14H17.65C16.83,16.33 14.61,18 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6C13.66,6 15.14,6.69 16.22,7.78L13,11H20V4L17.65,6.35Z"
    />
  </SVGIcon>
);

export const CloseIcon = ({ ...props }) => (
  <SVGIcon {...props}>
    <path
      fill="currentColor"
      d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
    />
  </SVGIcon>
);

export const HelpIcon = ({ ...props }) => (
  <SVGIcon {...props}>
    <path
      fill="currentColor"
      d="M15.07,11.25L14.17,12.17C13.45,12.89 13,13.5 13,15H11V14.5C11,13.39 11.45,12.39 12.17,11.67L13.41,10.41C13.78,10.05 14,9.55 14,9C14,7.89 13.1,7 12,7A2,2 0 0,0 10,9H8A4,4 0 0,1 12,5A4,4 0 0,1 16,9C16,9.88 15.64,10.67 15.07,11.25M13,19H11V17H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z"
    />
  </SVGIcon>
);

export const EarthIcon = ({ ...props }) => (
  <SVGIcon {...props}>
    <path
      fill="currentColor"
      d="M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13A1,1 0 0,0 14,12H8V10H10A1,1 0 0,0 11,9V7H13A2,2 0 0,0 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A2,2 0 0,0 11,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
    />
  </SVGIcon>
);

export const MarkerIcon = ({ ...props }) => (
  <SVGIcon {...props}>
    <path
      fill="currentColor"
      d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z"
    />
  </SVGIcon>
);

export const ShareIcon = ({ ...props }) => (
  <SVGIcon {...props}>
    <path
      fill="currentColor"
      d="M18,16.08C17.24,16.08 16.56,16.38 16.04,16.85L8.91,12.7C8.96,12.47 9,12.24 9,12C9,11.76 8.96,11.53 8.91,11.3L15.96,7.19C16.5,7.69 17.21,8 18,8A3,3 0 0,0 21,5A3,3 0 0,0 18,2A3,3 0 0,0 15,5C15,5.24 15.04,5.47 15.09,5.7L8.04,9.81C7.5,9.31 6.79,9 6,9A3,3 0 0,0 3,12A3,3 0 0,0 6,15C6.79,15 7.5,14.69 8.04,14.19L15.16,18.34C15.11,18.55 15.08,18.77 15.08,19C15.08,20.61 16.39,21.91 18,21.91C19.61,21.91 20.92,20.61 20.92,19A2.92,2.92 0 0,0 18,16.08Z"
    />
  </SVGIcon>
);

export const CopyIcon = ({ ...props }) => (
  <SVGIcon {...props}>
    <path
      fill="currentColor"
      d="M3 5V21H19V23H3C1.9 23 1 22.1 1 21V5H3M21 1H7C5.89 1 5 1.89 5 3V17C5 18.11 5.9 19 7 19H21C22.11 19 23 18.11 23 17V3C23 1.89 22.1 1 21 1M11 16H8V14H11V16M11 13H8V11H11V13M11 10H8V8H11V10M15 16H12V14H15V16M15 13H12V11H15V13M15 10H12V8H15V10Z"
    />
  </SVGIcon>
);

export const CommentIcon = ({ ...props }) => (
  <SVGIcon {...props}>
    <path
      fill="currentColor"
      d="M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9M16,14V13C16,11.67 13.33,11 12,11C10.67,11 8,11.67 8,13V14H16M12,6A2,2 0 0,0 10,8A2,2 0 0,0 12,10A2,2 0 0,0 14,8A2,2 0 0,0 12,6Z"
    />
  </SVGIcon>
);

export const HomeIcon = ({ ...props }) => (
  <SVGIcon {...props}>
    <path
      fill="currentColor"
      d="M19 10V7A2 2 0 0 0 17 5H7A2 2 0 0 0 5 7V10A2 2 0 0 0 3 12V17H4.33L5 19H6L6.67 17H17.33L18 19H19L19.67 17H21V12A2 2 0 0 0 19 10M17 10H7V7H17Z"
    />
  </SVGIcon>
);

export const MonumentIcon = ({ ...props }) => (
  <SVGIcon {...props}>
    <path fill="currentColor" d="M14,6L10.25,11L13.1,14.8L11.5,16C9.81,13.75 7,10 7,10L1,18H23L14,6Z" />
  </SVGIcon>
);

export const MuseumIcon = ({ ...props }) => (
  <SVGIcon {...props}>
    <path fill="currentColor" d="M11.5,1L2,6V8H21V6M16,10V17H19V10M2,22H21V19H2M10,10V17H13V10M4,10V17H7V10H4Z" />
  </SVGIcon>
);

export const ParcIcon = ({ ...props }) => (
  <SVGIcon {...props}>
    <path
      fill="currentColor"
      d="M11,21V16.74C10.53,16.91 10.03,17 9.5,17C7,17 5,15 5,12.5C5,11.23 5.5,10.09 6.36,9.27C6.13,8.73 6,8.13 6,7.5C6,5 8,3 10.5,3C12.06,3 13.44,3.8 14.25,5C14.33,5 14.41,5 14.5,5A5.5,5.5 0 0,1 20,10.5A5.5,5.5 0 0,1 14.5,16C14,16 13.5,15.93 13,15.79V21H11Z"
    />
  </SVGIcon>
);

export const RestaurantIcon = ({ ...props }) => (
  <SVGIcon {...props}>
    <path
      fill="currentColor"
      d="M8.1,13.34L3.91,9.16C2.35,7.59 2.35,5.06 3.91,3.5L10.93,10.5L8.1,13.34M14.88,11.53L13.41,13L20.29,19.88L18.88,21.29L12,14.41L5.12,21.29L3.71,19.88L13.47,10.12C12.76,8.59 13.26,6.44 14.85,4.85C16.76,2.93 19.5,2.57 20.96,4.03C22.43,5.5 22.07,8.24 20.15,10.15C18.56,11.74 16.41,12.24 14.88,11.53Z"
    />
  </SVGIcon>
);

export const TransportIcon = ({ ...props }) => (
  <SVGIcon {...props}>
    <path
      fill="currentColor"
      d="M12,2C8,2 4,2.5 4,6V15.5A3.5,3.5 0 0,0 7.5,19L6,20.5V21H8.23L10.23,19H14L16,21H18V20.5L16.5,19A3.5,3.5 0 0,0 20,15.5V6C20,2.5 16.42,2 12,2M7.5,17A1.5,1.5 0 0,1 6,15.5A1.5,1.5 0 0,1 7.5,14A1.5,1.5 0 0,1 9,15.5A1.5,1.5 0 0,1 7.5,17M11,10H6V6H11V10M13,10V6H18V10H13M16.5,17A1.5,1.5 0 0,1 15,15.5A1.5,1.5 0 0,1 16.5,14A1.5,1.5 0 0,1 18,15.5A1.5,1.5 0 0,1 16.5,17Z"
    />
  </SVGIcon>
);

export const DotsIcon = ({ ...props }) => (
  <SVGIcon {...props}>
    <path
      fill="currentColor"
      d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z"
    />
  </SVGIcon>
);

export const ClockIcon = ({ ...props }) => (
  <SVGIcon {...props}>
    <path
      fill="currentColor"
      d="M12 20C16.4 20 20 16.4 20 12S16.4 4 12 4 4 7.6 4 12 7.6 20 12 20M12 2C17.5 2 22 6.5 22 12S17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2M17 13.9L16.3 15.2L11 12.3V7H12.5V11.4L17 13.9Z"
    />
  </SVGIcon>
);

export const DeleteIcon = ({ ...props }) => (
  <SVGIcon {...props}>
    <path
      fill="currentColor"
      d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z"
    />
  </SVGIcon>
);
