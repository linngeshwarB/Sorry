"use client";

import { motion } from "framer-motion";

const QualitiesSection = () => {
  const qualities = [
    { text: "Funny", color: "text-yellow-300", delay: 0.1 },
    { text: "Hilarious", color: "text-orange-300", delay: 0.3 },
    { text: "Kind", color: "text-green-300", delay: 0.5 },
    { text: "Charismatic", color: "text-blue-300", delay: 0.7 },
    { text: "Diva", color: "text-purple-300", delay: 0.9 },
    { text: "Queen", color: "text-amber-300", delay: 1.1 },
    {
      text: "And let's be real... Extremely Hot",
      color: "text-pink-200",
      delay: 1.3,
      special: true,
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-16"
          style={{ fontFamily: "var(--font-rubik-mono)" }}
        >
          Why Shreya is Amazing:
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {qualities.map((quality, index) => {
            if (quality.special) {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: quality.delay,
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                  }}
                  viewport={{ once: true }}
                  className="col-span-full"
                >
                  <div className="bg-gradient-to-r from-pink-500 to-rose-500 p-8 rounded-3xl transform rotate-2 shadow-2xl">
                    <p
                      className={`text-3xl md:text-4xl lg:text-5xl font-bold ${quality.color}`}
                      style={{ fontFamily: "var(--font-dancing-script)" }}
                    >
                      {quality.text}
                    </p>
                  </div>
                </motion.div>
              );
            }

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: quality.delay }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.1,
                  rotate: Math.random() * 10 - 5,
                  transition: { duration: 0.3 },
                }}
                className="group"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
                  {index === 0 && (
                    <motion.div
                      whileHover={{
                        rotate: [0, -10, 10, -10, 0],
                        transition: { duration: 0.5 },
                      }}
                      className="text-5xl mb-4"
                    >
                      😂
                    </motion.div>
                  )}
                  {index === 1 && (
                    <motion.div
                      whileHover={{
                        scale: [1, 1.2, 1],
                        transition: { duration: 0.4 },
                      }}
                      className="text-5xl mb-4"
                    >
                      🤣
                    </motion.div>
                  )}
                  {index === 2 && (
                    <motion.div
                      whileHover={{
                        boxShadow: [
                          "0 0 20px rgba(255, 255, 255, 0.3)",
                          "0 0 40px rgba(255, 255, 255, 0.6)",
                          "0 0 20px rgba(255, 255, 255, 0.3)",
                        ],
                        transition: { duration: 0.6 },
                      }}
                      className="text-5xl mb-4 rounded-full p-2"
                    >
                      💕
                    </motion.div>
                  )}
                  {index === 3 && (
                    <motion.div
                      whileHover={{
                        background: [
                          "linear-gradient(45deg, #ff9a9e, #fecfef)",
                          "linear-gradient(45deg, #fecfef, #fecfef)",
                          "linear-gradient(45deg, #ff9a9e, #fecfef)",
                        ],
                        transition: { duration: 0.8 },
                      }}
                      className="text-5xl mb-4 rounded-full p-2"
                    >
                      ✨
                    </motion.div>
                  )}
                  {index === 4 && (
                    <motion.div
                      whileHover={{
                        rotate: [0, 15, -15, 0],
                        scale: [1, 1.3, 1],
                        transition: { duration: 0.6 },
                      }}
                      className="text-5xl mb-4"
                    >
                      💃
                    </motion.div>
                  )}
                  {index === 5 && (
                    <motion.div
                      whileHover={{
                        y: [0, -10, 0],
                        rotate: [0, 5, -5, 0],
                        filter: [
                          "drop-shadow(0 0 0px gold)",
                          "drop-shadow(0 0 20px gold)",
                          "drop-shadow(0 0 0px gold)",
                        ],
                        transition: { duration: 0.8 },
                      }}
                      className="text-5xl mb-4"
                    >
                      👑
                    </motion.div>
                  )}

                  <p
                    className={`text-2xl md:text-3xl font-semibold ${quality.color}`}
                  >
                    {quality.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QualitiesSection;
