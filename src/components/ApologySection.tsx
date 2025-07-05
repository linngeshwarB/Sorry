"use client";

import { motion } from "framer-motion";

const ApologySection = () => {
  const apologyMessages = [
    "Okay, so I know I'm a terrible friend...",
    "...and I totally messed up the date...",
    "...because my brain is basically a potato.",
    "BUT I COULD NEVER FORGET YOU!",
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl text-center space-y-8">
        {apologyMessages.map((message, index) => {
          if (index === 0) {
            // Slide in from left
            return (
              <motion.div
                key={index}
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.5 }}
                viewport={{ once: true }}
                className="text-2xl md:text-4xl font-semibold text-white"
              >
                {message}
              </motion.div>
            );
          } else if (index === 1) {
            // Blur to sharp
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 1, delay: index * 0.5 }}
                viewport={{ once: true }}
                className="text-2xl md:text-4xl font-semibold text-white"
              >
                {message}
              </motion.div>
            );
          } else if (index === 2) {
            // Letter by letter
            return (
              <motion.div
                key={index}
                className="text-2xl md:text-4xl font-semibold text-white"
              >
                {message.split("").map((letter, letterIndex) => (
                  <motion.span
                    key={letterIndex}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                      duration: 0.05,
                      delay: index * 0.5 + letterIndex * 0.05,
                    }}
                    viewport={{ once: true }}
                    className="inline-block"
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </motion.span>
                ))}
              </motion.div>
            );
          } else {
            // Dramatic scale-up
            return (
              <motion.div
                key={index}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                  delay: index * 0.5,
                }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-yellow-300"
                style={{ fontFamily: "var(--font-rubik-mono)" }}
              >
                {message}
              </motion.div>
            );
          }
        })}
      </div>
    </section>
  );
};

export default ApologySection;
