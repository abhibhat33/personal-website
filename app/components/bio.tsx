import { useEffect, useState } from "react";
import me from "../assests/me.jpeg";
import "../css/Bio.css";

function Bio() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="flex flex-col sm:flex-row items-center my-10 relative" style={{ justifyContent: "center" }}>

      <div className="flex justify-center py-8 sm:py-0 sm:pr-8">
        <div className={` ${animate ? "animate-image-enter" : ""}`}>
          <img
            src={me}
            alt="Profile"
            className="w-24 h-24 rounded-full"
          />
        </div>
      </div>

      <div className={`flex flex-col items-center sm:items-start text-center sm:text-left ${animate ? "animate-info-enter" : ""}`}>
        <h1 className="text-2xl font-semibold text-black dark:text-white">
          <p className="text-4xl font-black no-underline">
            Abhishek Bhat
          </p>
        </h1>
        <p className="text-black dark:text-white mb-0 mt-0">Software Engineer + Agriculturist</p>
      </div>
    </div>
  );
}

export default Bio;
