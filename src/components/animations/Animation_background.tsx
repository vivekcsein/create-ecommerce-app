"use client";
import { motion } from "framer-motion";
import React from "react";

const Animation_background = () => {
  return (
    <div className="fixed inset-0 opacity-20">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-pink-900/20" />
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, cyan 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, magenta 0%, transparent 50%)",
            "radial-gradient(circle at 50% 20%, blue 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />
    </div>
  );
};

export default Animation_background;
