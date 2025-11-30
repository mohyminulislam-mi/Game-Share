import React, { use, useEffect } from "react";
import download from "../assets/icon-downloads.png";
import ratings from "../assets/icon-ratings.png";
import review from "../assets/icon-review.png";
import { useParams } from "react-router";

const getData = fetch("/gamesdata.json").then((res) => res.json());

const GameDetails = () => {
  const { id } = useParams();
  const gameData = use(getData);
  const games = gameData.find((p) => String(p.id) === id) || [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-11/12 mx-auto">
      <title>Game Share | Details</title>
      <div className="lg:flex items-center justify-between border-b-2 border-[#dddddd] py-5 gap-4">
        <div className="lg:w-[35%] overflow-hidden md:items-center">
          <img
            className="w-[50%] mx-auto lg:w-full object-cover bg-base-100"
            src={games.coverPhoto}
          />
        </div>
        <div className="lg:w-[75%]">
          <div className="w-full border-b-2 border-[#dddddd] py-4 ">
            <h1 className="lg:font-bold font-semibold lg:text-2xl text-xl mb-2">
              {games.title}
            </h1>

            <div className="flex items-center gap-2">
              <h4 className="pt-1 pb-1">Ratings</h4>
              <img
                src={ratings}
                alt="Download Icon"
                className="w-[22px] h-[22px]"
              />
              <h1 className="text-green-500 font-semibold text-xl">
                {games.ratings}
              </h1>
            </div>
            <p>
              Category{" "}
              <span className="text-green-500 font-medium">
                {games.category}
              </span>
            </p>

            <p>
              Development by{" "}
              <span className="text-green-500 font-medium">
                {games.developer}
              </span>
            </p>
          </div>

          <div className=" mt-3 flex  gap-12">
            <div>
              <img src={download} alt="Download Icon" className="w-[30px]" />
              <h4 className="pt-1 pb-1">Downloads</h4>
              <h1 className="font-bold text-xl">100M</h1>
            </div>
            <div>
              <img src={review} alt="Download Icon" className="w-[30px]" />
              <h4 className="pt-1 pb-1">Reviews</h4>
              <h1 className="font-bold text-xl">100 K</h1>
            </div>
          </div>
          <div className="mt-5">
            <a href={games.downloadLink} target="_blank" className="btn bg-green-500 text-white">
              download link
            </a>
          </div>
        </div>
      </div>
      <div>
        <h3 className="mt-2 text-2xl font-semibold">{games.title}</h3>
        <p className="text-[#627382] mt-2 text-sm">{games.description}</p>
        <p className="text-[#627382] my-5 text-sm">
          This focus app takes the proven Pomodoro technique and makes it even
          more practical for modern lifestyles. Instead of just setting a timer,
          it builds a complete environment for deep work, minimizing
          distractions and maximizing concentration. Users can create custom
          work and break intervals, track how many sessions they complete each
          day, and review detailed statistics about their focus habits over
          time. The design is minimal and calming, reducing cognitive load so
          you can focus entirely on the task at hand. Notifications gently let
          you know when to pause and when to resume, helping you maintain a
          healthy rhythm between work and rest.
        </p>
      </div>
    </div>
  );
};

export default GameDetails;
