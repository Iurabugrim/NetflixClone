import React from "react";

const Colors = {
  Red: ["#E6090A", "#DF4E61"],
  Green: ["#E6090A", "#DFDC4E"],
  Yellow: ["#E6B209", "#DFBD4E"],
  Blue: ["#E6090A", "#4EA1DF"],
  Purple: ["#BB09E6", "#BF4EDF"],
  Orange: ["#E67B09", "#DFAC4E"],
};

interface AvatarProps {
  color: keyof typeof Colors;
}

const Avatar: React.FC<AvatarProps> = ({ color }) => {
  return (
    <svg
      width="275px"
      height="275px"
      viewBox="0 0 275 275"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="linearGradient-jqzxm3jhou-1"
        >
          <stop stopColor={Colors[color][0]} offset="0%"></stop>
          <stop stopColor={Colors[color][1]} offset="100%"></stop>
        </linearGradient>
      </defs>
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="Desktop" transform="translate(-250.000000, -257.000000)">
          <g id="Group" transform="translate(250.000000, 257.000000)">
            <rect
              id="Rectangle"
              fill="url(#linearGradient-jqzxm3jhou-1)"
              x="0"
              y="0"
              width="275"
              height="275"
              rx="38"
            ></rect>
            <circle id="Oval" fill="#FFFFFF" cx="56" cy="91" r="20"></circle>
            <circle
              id="Oval"
              fill="#FFFFFF"
              cx="221.5"
              cy="90.5"
              r="17.5"
            ></circle>
            <path
              d="M119.137468,152.604297 C160.213128,172.001934 197.870746,172.001934 232.110323,152.604297"
              id="Path"
              stroke="#FFFFFF"
              strokeWidth="14"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default Avatar;
