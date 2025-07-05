"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const text = "HAPPY BIRTHDAY SHREYA";
  const letters = text.split("");

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-white/20 rounded-full"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 100 - 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <motion.div
        className="text-center z-10"
        animate={{
          scale: [1, 1.05, 1],
          filter: [
            "drop-shadow(0 0 20px rgba(255, 255, 255, 0.5))",
            "drop-shadow(0 0 30px rgba(255, 255, 255, 0.8))",
            "drop-shadow(0 0 20px rgba(255, 255, 255, 0.5))",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight px-4">
          {letters.map((letter, i) => (
            <motion.span
              key={i}
              initial={{
                x: Math.random() * 400 - 200,
                y: Math.random() * 400 - 200,
                scale: 0,
                opacity: 0,
                rotate: Math.random() * 360,
              }}
              animate={
                isLoaded
                  ? {
                      x: 0,
                      y: 0,
                      scale: 1,
                      opacity: 1,
                      rotate: 0,
                    }
                  : {}
              }
              transition={{
                type: "spring",
                stiffness: 60,
                damping: 15,
                delay: i * 0.1,
              }}
              className="inline-block"
              style={{ fontFamily: "var(--font-rubik-mono)" }}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 1 }}
          className="text-xl md:text-2xl text-pink-100 font-light"
        >
          🎉 A special apology website just for you! 🎉
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
