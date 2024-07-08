import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ViratKohli() {
  return (
    <div className="text-black dark:text-white">
      <h1 className="font-bold text-2xl">Virat Kohli: The Modern Cricket Legend</h1>
      <p className="mt-4">
        Virat Kohli, the former captain of the Indian cricket team, is widely regarded as one of the greatest batsmen of all time. His journey from a young, aspiring cricketer to a global icon is a testament to his dedication, passion, and relentless pursuit of excellence.
      </p>
      <p className="mt-4">
        Born on November 5, 1988, in Delhi, Kohli showed a keen interest in cricket from a young age. He rose through the ranks quickly, making his debut for the Indian national team in 2008. Since then, he has broken numerous records and set new benchmarks in the world of cricket.
      </p>
      <p className="mt-4">
        Kohli's batting style is characterized by his aggressive yet elegant approach. He possesses a wide range of shots and has the ability to dominate bowlers in all formats of the game. His remarkable consistency and ability to chase down targets have earned him the nickname "Chase Master."
      </p>
      <p className="mt-4">
        As a captain, Kohli led India to several memorable victories, including their first-ever Test series win in Australia in 2018-19. His leadership style is defined by his intensity, tactical acumen, and a never-give-up attitude.
      </p>
      <p className="mt-4">
        Off the field, Kohli is known for his fitness regime and disciplined lifestyle, which have set new standards for professional cricketers. He is also actively involved in various philanthropic activities through the Virat Kohli Foundation, which aims to support underprivileged children and aspiring athletes.
      </p>
      <p className="mt-4">
        Virat Kohli's journey is an inspiration to millions of young cricketers around the world. His story is not just about cricket but about the power of perseverance, hard work, and the relentless pursuit of one's dreams.
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

export default ViratKohli;
