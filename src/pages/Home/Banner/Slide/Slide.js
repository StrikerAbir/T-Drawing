import React from "react";

const Slide = ({ slide }) => {
  const { img, id, next, prev } = slide;

  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="carousel-img">
        <img src={img} alt="" className="w-full rounded-xl" />
      </div>
      <div className="absolute flex justify-center transform -translate-y-1/2 top-1/2 w-full">
        <h1 className="text-6xl font-bold text-white">
          DISCOVER YOUR <br />
                  <span className="text-green-400 ml-16">"OWN ART"</span>
        </h1>
      </div>
      <div className="absolute flex justify-center transform -translate-y-1/2 top-2/3 w-full">
        <p className="text-white text-xl">
          T-Drawing can draw your imagination and let you see your own imagination with your eyes. 
        </p>
      </div>
      <div className="absolute flex justify-center transform -translate-y-1/2 top-3/4 w-full">
        <button className="btn btn-outline hover:bg-green-500 text-white">
          Art gallery
        </button>
      </div>

      <div className="absolute left-10 top-1/2">
        <a href={`#slide${prev}`} className="text-white font-bold text-4xl ">
          ❮
        </a>
      </div>
      <div className="absolute right-10 top-1/2">
        <a href={`#slide${next}`} className="text-white font-bold text-4xl">
          ❯
        </a>
      </div>
    </div>
  );
};

export default Slide;
