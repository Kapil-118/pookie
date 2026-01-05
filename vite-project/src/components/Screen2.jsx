// Screen2.jsx
import { motion } from "framer-motion";

export default function Screen2({ onNext }) {
  return (
    <motion.div
      className="card"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        className="title font-handwriting text-pink-main"
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        A tiny Message 💌
      </motion.h2>

      <motion.p
        className="body-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Every time you text, the whole day feels lighter. Every time you smile, the world seems a little more beautiful.
      </motion.p>

      <motion.p
        className="body-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        So, before I say what my heart is shouting, let me show you something.
      </motion.p>

      <motion.button
        className="btn-primary"
        onClick={onNext}
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 250, damping: 15 }}
      >
        Next 💖
      </motion.button>
    </motion.div>
  );
}
