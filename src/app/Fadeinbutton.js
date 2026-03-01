import { motion } from "framer-motion";

export default function AnimatedButton() {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2.5, ease: "easeOut", delay: 1 }}
      className="
        bg-gradient-to-r from-teal-300 via-cyan-300 to-emerald-300
        text-white font-semibold
        px-8 py-3
        rounded-xl
        shadow-lg shadow-teal-400/40
        hover:shadow-teal-400/70
        transition-transform transition-shadow duration-300
        hover:scale-105
        hover:brightness-125
      "
    >
      Start Tracking
    </motion.button>
  );
}