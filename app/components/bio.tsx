// app/components/Bio.tsx
import me from "../assests/me.jpeg"

function Bio() {
  return (
    <div
      className="flex flex-col sm:flex-row items-center my-10"
      style={{
          justifyContent: "center",
          // alignItems: "",
        }}>

      <div className="flex justify-center py-8 sm:py-0 sm:pr-8">
        <img
          src={me}
          alt="Profile"
          className="w-24 h-24 rounded-full"
        />
      </div>
      <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
        <h1 className="text-2xl font-semibold text-black dark:text-white">
          <p className="text-4xl font-black no-underline">
            Abhishek Bhat
          </p>
        </h1>
        <p className="text-black dark:text-white mb-0 mt-0">Software Engineer + Cricketer</p>
      </div>
    </div>
  );
}

export default Bio;
