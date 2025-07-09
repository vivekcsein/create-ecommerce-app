"use client";
import { motion } from "framer-motion";
import Searchbar_main from "@/components/context/Searchbar/Searchbar_main";

const Searchbar = () => {
  return (
    <motion.div
      className="text-center relative"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      <div className="w-full flex items-center justify-center ">
        <h1 className=" w-1/5 gradientText">Six Teal</h1>
      </div>

      <Searchbar_main />
    </motion.div>
  );
};

export default Searchbar;
