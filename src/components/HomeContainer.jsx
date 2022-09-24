import React from "react";
import Delivery from "../img/delivery.png";
import HeroBg from "../img/heroBg.png";

const HomeContainer = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full" id="home">
      <div className="py-2 flex-1 flex flex-col items-start  justify-center gap-5">
        <div className="flex items-center gap-2 justify-center bg-orange-100 px-2 py-1 rounded-full">
          <p className="text-base text-orange-500 font-semibold">
            Bike Delivery
          </p>
          <div className="w-6 h-6 bg-white rounded-full overflow-hidden">
            <img
              src={Delivery}
              className="w-full h-full object-contain "
              alt="bike delivery"
            />
          </div>
        </div>

        <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking text-headingColor">
          The Fastest Delivery in{" "}
          <span className="text-orange-600 text-[3rem] lg:text-[5rem]">
            Your Town
          </span>
        </p>
        <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
          Craving food from your favorite restaurant or need to pick up but
          don’t feel like leaving your house?{" "}
          <span className="text-orange-600 font-semibold text-[1.1rem]">
            Meal-Route
          </span>
          , a website and mobile app, is a unique delivery service that gives
          you the freedom to get exactly what you want from restaurants without
          in-house delivery services.
        </p>

        <button
          type="button"
          className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
        >
          Order Now
        </button>
      </div>
      <div className="py-2 flex-1 flex items-center relative">
        <img
          src={HeroBg}
          className=" ml-auto h-420 w-full lg:w-auto lg:h-650"
          alt="hero-bg"
        />
      </div>
    </section>
  );
};

export default HomeContainer;
