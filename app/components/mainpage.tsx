import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@remix-run/react";

function MainPage() {
  return (
    <div className="text-black dark:text-white">
      <h1 className="font-bold text-2xl">Welcome to My Blog</h1>
        <p className="mt-4">
           my thoughts, insights, and experiences on various topics. Here's a glimpse of what's available:
        </p>

        <h2 className="mt-8 text-xl">Featured Blog</h2>
        <ul className="list-disc pl-8 mt-4">
          <li>
            <Link to="/viratblog" rel="noreferrer" className="text-lg hover:text-blue-700 hover:underline">
              <strong>Virat Kohli: The Modern Cricket Legend.</strong>
            </Link>
              <p className="ml-4 mt-1">
                - A blog post about Virat Kohli, from my perspective.
              </p>
          </li>
          <li className="mt-4">
            <Link to="/ourfarm" rel="noreferrer" className="text-lg hover:text-blue-700 hover:underline">
              <strong>Our Farm</strong>
            </Link>
              <p className="ml-4 mt-1">
                - A blog post about what we do in our farm.
              </p>
          </li>
        </ul>


      <h2 className="mt-8 text-xl">More to Come</h2>
      <p className="mt-4">
        Stay tuned for more exciting content on various topics, including technology, personal experiences, and more.
      </p>

      <h2 className="mt-8 text-xl">Connect with Me</h2>
      <p>
        Feel free to contact me if you have any questions or if you are looking forward to collaborating. Here are two of the most efficient ways to reach me:
      </p>
      <ul className="m-8">
        <li>
          <FontAwesomeIcon icon={faEnvelope} style={{ minWidth: 25 }} />
          <a href="mailto:abhishekbhat477@gmail.com"> abhishekbhat477@gmail.com</a>
        </li>
        <li>
          <FontAwesomeIcon icon={faXTwitter} style={{ minWidth: 25 }} />
          <a href="https://twitter.com/buzzmebhat"> twitter/@buzzmebhat</a>
        </li>
      </ul>
    </div>
  );
}

export default MainPage;
