
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ViratKohli() {
  return (
    <div className="text-black dark:text-white">
      {/* Add a brief introduction */}
      <p className="mt-4">Welcome to the fan page of Virat Kohli, the modern legend of cricket!</p>

      <h1 className="font-bold text-2xl">
        Virat Kohli: The Modern Cricket Legend
      </h1>
      <p className="mt-4 indent-12 leading-1">
        Virat Kohli, the former captain of the Indian cricket team, is widely
        regarded as one of the greatest batsmen of all time. His journey from a
        young, aspiring, and aggressive cricketer to a global icon is a testament to his
        dedication, passion, and relentless pursuit of excellence.
      </p>
      <p className="mt-4 indent-12 leading-1">
        Born on November 5, 1988, in Delhi, Kohli showed a keen interest in
        cricket from a young age. He came out and played a Ranji match just after
        his father passed away. He rose through the ranks quickly, making his
        debut for the Indian national team in 2008. Since then, he has broken
        numerous records and set new benchmarks in the world of cricket.
      </p>
      <p className="mt-4 text-red-600 leading-1">
         Why is Virat Kohli so loved? Does he deserve this admiration?
      </p>
      <p className="mt-4 indent-12 leading-1">
       Absolutely, he absolutely deserves it. He hasn't had a cheat day since
       2013 when he started his fitness journey. As a human being, it is impossible
       to live like this. Doing repetitive tasks day in and day out isn't easy.
       Just for his dedication to Indian Cricket, he deserves it all.
      </p>

      {/* Break the long paragraph about batting style */}
      <p className="mt-4 indent-12 leading-1">
        Kohli's batting style is characterized by his aggressive yet elegant
        approach. He possesses a wide range of shots and has the ability to
        dominate bowlers in all formats of the game. His cover drive is simply
        spectacular to watch.
      </p>
      <p className="mt-4 indent-12 leading-1">
        His remarkable consistency and ability to chase down targets have earned him the nickname "Chase Master."
      </p>

      <p className="mt-4 indent-12 leading-1">
      I want to tell a story: In a tri-series ODI against Sri Lanka with Australia involved, Sri Lanka batted first and scored 320. India had to chase this score within 40 overs to get a bonus point to play the final. The young Kohli played an incredible knock, scoring 133 not out, and finished the match in the 37th over. In this innings, the world's greatest bowler at that point, Lasith Malinga, conceded 24 runs in an over. This shows his passion and commitment from a very young age.
      </p>

      <p className="mt-4 indent-12 leading-1">
        His aggression is undeniable. He possesses an unmatched fire and determination. Even the mighty Australian cricket team hesitates to sledge him. In a test match against England as England chased in the fourth innings, he told his team in the huddle, "'60 overs, make them feel the heat!'"  He's not only aggressive, but he also inspires people in that way.
      </p>

      <p className="mt-4 indent-12 leading-1">
        As a captain, Kohli led India to several memorable victories, including
        their first-ever Test series win in Australia in 2018-19. His leadership
        style is defined by his intensity, tactical acumen, and a never-give-up
        attitude.
      </p>
      <p className="mt-4 indent-12 leading-1">
        Off the field, Kohli is known for his fitness regime and disciplined
        lifestyle, which have set new standards for professional cricketers. He
        is also actively involved in various philanthropic activities through
        the Virat Kohli Foundation, which aims to support underprivileged
        children and aspiring athletes.
      </p>
      <p className="mt-4 indent-12 leading-1">
        Virat Kohli's journey is an inspiration to millions of young cricketers
        around the world. His story is not just about cricket but about the
        power of perseverance, hard work, and the relentless pursuit of one's
        dreams.
      </p>
      <h2 className="mt-8 text-xl">Connect with Me</h2>
      <p>
        Feel free to contact me if you have any questions or if you are looking
        forward to collaborating. Here are two of the most efficient ways to
        reach me:
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
