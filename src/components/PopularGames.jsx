import { useState } from "react";
import RatingsIcon from "./../assets/icon-ratings.png";
import { Link } from "react-router";
import { motion } from "framer-motion";

const PopularGames = ({ games }) => {
  const [sort, setSort] = useState("none");

  const gemeData = [...games].sort((a, b) => {
    if (sort === "low-asc") return b.ratings - a.ratings;
    if (sort === "high-desc") return a.ratings - b.ratings;
    return 0;
  });

  // Animation settings
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className=" my-20">
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-3"
        >
          Popular Games
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Choose your favorite game download and play!
        </motion.p>
      </div>

      <div className="flex justify-between items-center mt-16">
        <h3 className="font-bold ">Games Found ({games.length})</h3>
        <label>
          <select
            className="select select-bordered"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="none">Sort by ratings</option>
            <option value="low-asc">Low-High</option>
            <option value="high-desc">High-Low</option>
          </select>
        </label>
      </div>

      {/* Animation Start */}
      <motion.div
        className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-4 mt-10"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {gemeData.map((game) => (
          <motion.div
            variants={card}
            key={game.id}
            className="card bg-base-100 shadow-sm hover:scale-[1.03] hover:shadow-lg transition duration-300 ease-out"
          >
            <figure className="h-48 overflow-hidden">
              <img className="w-full object-cover" src={game.coverPhoto} />
            </figure>
            <div className="card-body">
              <span className="pr-[5px] font-medium">{game.title}</span>

              <div className="flex justify-between items-center pt-3">
                <div className="flex items-center">
                  <span>Category : </span>
                  <span className="pl-1 font-medium text-sm text-green-500">
                    {game.category}
                  </span>
                </div>
                <div className="flex justify-between items-center bg-orange-100 lg:px-3 px-1.5 py-1 rounded">
                  <img className="lg:w-[15px] w-[12px]" src={RatingsIcon} />
                  <span className="pl-1 font-medium text-sm">
                    {game.ratings}
                  </span>
                </div>
              </div>

              <div className="mt-5 flex justify-center">
                <Link
                  to={`/gamedetails/${game.id}`}
                  className="lg:w-[40%] text-center text-white bg-green-500 p-2 rounded"
                >
                  View Details
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default PopularGames;
