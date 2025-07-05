"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const CoreMemorySection = () => {
  const [windowWidth, setWindowWidth] = useState(1200); // Default width for SSR

  useEffect(() => {
    // Set initial width
    setWindowWidth(window.innerWidth);
    
    // Handle window resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Moving bus window effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 bg-white/10 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              width: `${50 + Math.random() * 100}px`,
            }}
            animate={{
              x: [-100, windowWidth + 100],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-4xl text-center z-10"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-pink-600/20 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-pink-300/30"
        >
          <div className="text-6xl md:text-8xl mb-6">🚌</div>
          <p className="text-2xl md:text-3xl lg:text-4xl font-light text-white leading-relaxed">
            Remember all our bus talks? The best part of my school day was
            spending it with you,
            <span className="font-semibold text-pink-100">
              {" "}
              spilling the tea
            </span>{" "}
            and
            <span className="font-semibold text-pink-100">
              {" "}
              judging everyone.
            </span>
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            viewport={{ once: true }}
            className="mt-8 text-lg md:text-xl text-pink-200 font-light"
          >
            Those were the golden days! 💕
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CoreMemorySection;
