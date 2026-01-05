// Screen1.jsx
import { motion } from "framer-motion";

export default function Screen1({ onNext }) {
  return (
    <motion.div
      className="card"
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1
        className="title font-handwriting text-pink-main"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Hey Sindhu.. ❤️
      </motion.h1>

      <motion.p
        className="subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Can we talk for a moment? There is something important I want to tell you.
      </motion.p>

      <motion.button
        className="btn-primary"
        onClick={onNext}
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 250, damping: 15 }}
      >
        Continue ❤️
      </motion.button>
    </motion.div>
  );
}
