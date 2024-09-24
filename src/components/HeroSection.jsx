import video1 from "../assets/vid1.mp4";
import video2 from "../assets/vid2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Seemless Delivery Service
        <span className="bg-gradient-to-r from-rose-600 to-neutral-700 text-transparent bg-clip-text">
          {" "}
          Nationwide
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat suscipit tenetur rem sit quod consequatur molestias, odit laboriosam dolor repudiandae libero amet praesentium quae quo! Necessitatibus ut adipisci quas minus.
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-rose-600 to-neutral-400 py-3 px-4 mx-3 rounded-md"
        >
          Start for free
        </a>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border">
          Documentation
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-rose-600 shadow-sm shadow-neutral-700 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-rose-600 shadow-sm shadow-neutral-700 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
