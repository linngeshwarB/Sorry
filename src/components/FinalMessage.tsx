"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Confetti from "react-confetti";

const FinalMessage = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [isForgiving, setIsForgiving] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState({ width: 1200, height: 800 });

  useEffect(() => {
    // Set initial dimensions
    setWindowDimensions({ width: window.innerWidth, height: window.innerHeight });
    
    // Handle window resize
    const handleResize = () => {
      setWindowDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleForgivenessClick = () => {
    setShowConfetti(true);
    setIsForgiving(true);

    // Stop confetti after 5 seconds
    setTimeout(() => {
      setShowConfetti(false);
    }, 5000);
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative">
      {showConfetti && (
        <Confetti
          width={windowDimensions.width}
          height={windowDimensions.height}
          recycle={false}
          numberOfPieces={200}
          colors={[
            "#ff69b4",
            "#ff1493",
            "#ffc0cb",
            "#ffb6c1",
            "#ff69b4",
            "#ffffff",
          ]}
        />
      )}

      <div className="max-w-4xl text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl lg:text-4xl font-light text-white leading-relaxed"
          >
            Happy birthday to the{" "}
            <span className="font-bold text-pink-200">best person</span> to
            share gossip with. Hope you have an{" "}
            <span className="font-bold text-yellow-300">amazing day!</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {!isForgiving ? (
              <motion.button
                onClick={handleForgivenessClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-12 py-6 rounded-full text-xl md:text-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border-4 border-white/20"
              >
                Forgive me? 🥺
              </motion.button>
            ) : (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="space-y-4"
              >
                <div className="text-6xl md:text-8xl">🎉</div>
                <p className="text-2xl md:text-3xl font-bold text-green-300">
                  Thank you for being amazing! 💕
                </p>
                <p className="text-lg md:text-xl text-pink-200">
                  You&apos;re the best friend anyone could ask for!
                </p>
              </motion.div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            viewport={{ once: true }}
            className="pt-8"
          >
            <p className="text-lg md:text-xl text-pink-200 font-light">
              P.S. - I promise to never forget your birthday again! 🤞
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating birthday elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl md:text-4xl"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            {["🎂", "🎈", "🎊", "🎁", "🌟"][Math.floor(Math.random() * 5)]}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FinalMessage;
