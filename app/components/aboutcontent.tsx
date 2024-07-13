import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useEffect, useState } from "react";

function AboutContent() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
  }, []);

  const interests = [
    { name: "React Native", color: "bg-blue-500" },
    { name: "React.js", color: "bg-blue-600" },
    { name: "Ruby on Rails", color: "bg-red-600" },
    { name: "JavaScript / TypeScript", color: "bg-yellow-400" },
    { name: "Gen AI", color: "bg-purple-600" }
  ];

  return (
    <div className="text-black dark:text-white">
      <p className="font-bold">Hi! I am Abhishek.</p>
      <p className="mt-4">Software Engineer + Agriculturist</p>
      <p className="mt-4">
        My goal is to enhance people's lives through technology and other means. I currently live in Sagar, Karnataka, India 🇮🇳 . I am a Software engineer, I have been working on converting ideas into software application for almost {new Date().getFullYear() - 2022} + years. I am currently working at{" "}
        <a href="https://tikkl.com" target="_blank">
          Tikkl
        </a>
        . I have a completed B.Tech in Information Science and Engineering.
      </p>

      <p className="mt-4">
        I created this website as a place to document my journey as I learn new things and share them with you.
      </p>

      <p className="mt-4">Currently I am enthusiastic about:</p>

      <div className="flex flex-wrap gap-4 mt-4">
        {interests.map((interest, index) => (
          <TransitionGroup component={null} key={index}>
            {showContent && (
              <CSSTransition classNames="fade" timeout={index * 600}>
                <div className={`p-2 rounded-full text-xs text-white ${interest.color}`}>
                  <p>{interest.name}</p>
                </div>
              </CSSTransition>
            )}
          </TransitionGroup>
        ))}
      </div>

      <p className="mt-4">
        When I am not writing code or working on a blog post, I'm probably spending my time either playing Cricket or in Agricultural activities.
      </p>

      <h2 className="mt-4">👋 Let's talk</h2>
      <p>
        Feel free to contact me if you have any questions or if you are looking forward to collaborate. You can reach me through the following ways:
      </p>
      <ul className="m-8">
        <li>
          <FontAwesomeIcon icon={faEnvelope} style={{ minWidth: 25 }} /><a href="mailto: abhishekbhat477@gmail.com"> abhishekbhat477@gmail.com</a>
        </li>
        <li>
          <FontAwesomeIcon icon={faXTwitter} style={{ minWidth: 25 }} /> <a href="https://twitter.com/buzzmebhat"> twitter/@buzzmebhat</a>
        </li>
      </ul>
    </div>
  );
}

export default AboutContent;
