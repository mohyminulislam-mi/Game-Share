import React, { useState } from "react";
import games from "./../assets/games.png";
import {  toast } from "react-toastify";
import { motion } from "framer-motion";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleNewsletter = (event) => {
    event.preventDefault();
    toast.success("You are eligible for Newsletter");
    setEmail("");
  };

  return (
    <section className="w-11/12 mx-auto mb-14">
      <motion.div
        className="bg-green-500 relative rounded-2xl p-8 md:p-12 text-white overflow-hidden"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-xl"
        >
          <h4 className="uppercase tracking-widest text-sm mb-2">
            Game Update
          </h4>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Updated on Our Latest Game
          </h2>
          <p className="mb-6 text-white/80">
            Subscribe to get exclusive updates, release dates, and
            behind-the-scenes content from our development team.
          </p>

          <form className="mt-6" onSubmit={handleNewsletter}>
            <div className="relative max-w-lg">
              <label className="sr-only" htmlFor="email">
                Email
              </label>

              <input
                className="w-full rounded-full bg-white text-gray-600 p-4 pe-32 text-sm font-medium"
                id="email"
                type="email"
                placeholder="john@doe.com"
                value={email}
                onChange={handleChange}
              />

              <motion.button
                type="submit"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="absolute cursor-pointer end-1 top-1/2 -translate-y-1/2 rounded-full bg-green-500 px-5 py-3 text-sm font-medium transition hover:bg-blue-700"
              >
                Subscribe
              </motion.button>
            </div>
          </form>
        </motion.div>

        <motion.div
          className="absolute top-1 right-6 lg:w-[23%] w-[15%]"
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <img src={games} alt="Games" />
        </motion.div>
        {/* <ToastContainer
          position="top-right"
          autoClose={1000}
          pauseOnHover={false}
          draggable
          theme="light"
        /> */}
      </motion.div>
    </section>
  );
};

export default Newsletter;
