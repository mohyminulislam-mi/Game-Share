import { Link } from "react-router";
import games from "./../assets/games.png";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

const Conatct = () => {
  const handleMessage = () => {
    Swal.fire({
      title: "Thank You",
      icon: "success",
      draggable: true,
    });
  };

  return (
    <div>
      <title>Game Share | Contact Us</title>

      {/* Top Intro Section */}
      <motion.div
        className="lg:w-9/12 mx-auto py-4 border-b border-gray-300 "
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="hero-content grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
          <motion.img
            src={games}
            className="max-w-sm rounded-lg"
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          />

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h1 className="text-5xl font-bold">Before Contact</h1>
            <p className="py-6">
              GameShare is a Single-Page Application (SPA) built with React that
              serves as a dedicated portal for comprehensive game details and
              the latest gaming news.
            </p>
            <Link to={"/"} className="btn bg-green-500 text-white">
              Get Started
            </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Contact + Form Section */}
      <motion.div
        className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 py-5"
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Left Side Text */}
        <motion.div
          className="md:w-1/2 p-5"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-gray-700 mb-6">
            Have any questions or suggestions? Feel free to reach out.
          </p>
          <ul className="space-y-3 text-gray-800">
            <li className="bg-green-100 p-2 rounded">
              <strong>Email:</strong> contact@gameshare.com
            </li>
            <li className="bg-green-100 p-2 rounded">
              <strong>Phone:</strong> +880 1234 567890
            </li>
            <li className="bg-green-100 p-2 rounded">
              <strong>Location:</strong> Dhaka, Bangladesh
            </li>
          </ul>
        </motion.div>

        {/* Form */}
        <motion.form
          className="md:w-1/2 bg-white p-6 rounded-lg shadow-md space-y-4"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-purple-500"
            required
          />
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-purple-500"
            required
          />
          <textarea
            placeholder="Your message..."
            rows="5"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-purple-500"
            required
          ></textarea>

          <motion.button
            type="submit"
            onClick={handleMessage}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.92 }}
            className="btn bg-green-500 text-white px-6 py-2 rounded"
          >
            Send Message
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default Conatct;
