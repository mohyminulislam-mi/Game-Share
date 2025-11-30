import React, { Suspense, use } from "react";
import Slider from "../../components/Slider";
import PopularGames from "../../components/PopularGames";
import Newsletter from "../../components/Newsletter";

const getData = fetch("/gamesdata.json").then((res) => res.json());
const Home = () => {
  const games = use(getData);
  return (
    <div className="w-11/12 mx-auto">
      <title>Game Share | Home</title>
      {/* Slider is here */}
      <Slider />
      <Suspense
        fallback={
          <span className="loading loading-ring loading-xl text-center"></span>
        }
      >
        <PopularGames games={games}></PopularGames>
      </Suspense>
      <Newsletter />
    </div>
  );
};

export default Home;
