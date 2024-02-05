"use client";

import {
  RiLinkedinFill,
  RiGithubFill,
  RiInstagramFill,
} from "react-icons/ri";

import Link from "next/link";

const icons = [
  {
    path: "https://www.linkedin.com/in/samuel-gifford/",
    name: <RiLinkedinFill />,
  },
  {
    path: "https://github.com/scg-code",
    name: <RiGithubFill />,
  },
  {
    path: "https://www.instagram.com/samuel.conor/?hl=en",
    name: <RiInstagramFill />,
  },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
