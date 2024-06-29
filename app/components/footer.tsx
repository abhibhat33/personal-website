import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = React.memo(() => {
  return (
    <footer
      className="my-2 flex justify-center items-center"
    >
      <a
        href="https://twitter.com/buzzmebhat"
        target="_blank"
        className="text-black dark:text-gray-300 mx-4"
        rel="noreferrer"
      >
        <FontAwesomeIcon
          icon={faXTwitter}
          size="2x"
          className="min-w-[25px]"
        />
      </a>

      <a
        href="mailto:abhishekbhat477@gmail.com"
        target="_blank"
        className="text-black dark:text-gray-300 mx-4"
        rel="noreferrer"
      >
        <FontAwesomeIcon
          icon={faEnvelope}
          size="2x"
          className="min-w-[25px]"
        />
      </a>

      <a
        href="https://github.com/abhibhat33"
        target="_blank"
        className="text-black dark:text-gray-300 mx-4"
        rel="noreferrer"
      >
        <FontAwesomeIcon
          icon={faGithub}
          size="2x"
          className="min-w-[25px]"
        />
      </a>
    </footer>
  );
});

export default Footer;
