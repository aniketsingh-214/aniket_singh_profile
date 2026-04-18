import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const socialIcons = [
  {
    icon: faGithub,
    link: "https://github.com/aniketsingh-214/",
    label: "GitHub",
  },
  {
    icon: faLinkedin,
    link: "https://www.linkedin.com/in/aniketsingh214/",
    label: "LinkedIn",
  },
  {
    icon: faInstagram,
    link: "https://www.instagram.com/mr_aniket_.offical/",
    label: "Instagram",
  },
  {
    icon: faCode,
    link: "https://leetcode.com/u/BT21CSE214/",
    label: "LeetCode",
  },
];

const SocialMedia = () => {
  return socialIcons.map((item, index) => (
    <a
      href={item.link}
      aria-label={item.label}
      target="_blank"
      rel="noreferrer"
      className={`text-picto-primary hover:bg-picto-primary p-2 pt-3 xs:p-2.5 xs:pt-3.75 sm:pt-4 md:pt-5 sm:p-3 md:p-3.75 hover:text-white rounded-md`}
      key={index}
    >
      <FontAwesomeIcon
        icon={item.icon}
        className={`text-xl w-4.5 aspect-square`}
      />
    </a>
  ));
};

export default SocialMedia;
