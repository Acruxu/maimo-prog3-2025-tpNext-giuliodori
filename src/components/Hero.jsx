import React from "react";

const Hero = () => {
  return (
    <section className="relative h-screen bg-[url('/assets/imagenes/hero3.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Discover Amazing Recipes
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mt-5">
          Explore dishes from different cuisines around the world
        </p>
      </div>
    </section>
  );
};

export default Hero;
