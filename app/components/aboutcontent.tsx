import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AboutContent() {
  return (
    <div className="text-black dark:text-white">
      <p className="font-bold">Hi! I am Abhishek.</p>
      <p className="mt-4">Software Engineer + Cricketer + Agriculturists</p>
      <p className="mt-4">
        My aspiration is to bring wellbeing into people lives through Technology
        and other means. I currently live in Sagar, Karnataka, India 🇮🇳 . I am a
        Software engineer, I have been working on converting ideas into software
        application for almost {new Date().getFullYear() - 2022} + years. I am
        currently working at{" "}
        <a href="https://tikkl.com" target="_blank">
          Tikkl
        </a>
        . I have a completed B.Tech in Information Science and Engineering.
      </p>

      <p className="mt-4">
        I created this website as a place to document my journey as I learn new
        things and share them with you.
      </p>
      <p>Currently I am enthusiastic about:</p>
      <ul className="ml-8">
        <li className="text-black dark:text-white">React Native</li>
        <li className="text-black dark:text-white">React.js / Vue.js</li>
        <li className="text-black dark:text-white">Redux / Vuex</li>
        <li className="text-black dark:text-white">Javascript / Typescript</li>
      </ul>

      <p>
        When I am not writing code or working on a blog post, I'm probably
        spending my time either

        , Playing Cricket

        or watching Web series.
      </p>

      <h2>Elsewhere on the web</h2>
      <h2> 👋 Let's talk </h2>
      <p>
        Feel free to contact if you have any questions or if you are looking
        forward to collaborate. Here are two most efficient ways to reach me:
      </p>
      <ul className="m-8">
        <li>
        <FontAwesomeIcon
          icon={faEnvelope}
          style={{ minWidth: 25 }}
        /><a href="mailto: abhishekbhat477@gmail.com"> abhishekbhat477@gmail.com</a>
        </li>
        <li>
        <FontAwesomeIcon
          icon={faXTwitter}
          style={{ minWidth: 25 }}
        /> <a href="https://twitter.com/buzzmebhat"> twitter/@buzzmebhat</a>
        </li>
      </ul>
    </div>
  );
}

export default AboutContent;
