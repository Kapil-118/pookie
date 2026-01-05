// Screen4.jsx
import { motion } from "framer-motion";

export default function Screen4() {
  return (
    <motion.div
      className="card"
      initial={{ opacity: 0, scale: 0.9, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <motion.h2
        className="title font-handwriting text-pink-main"
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        So here it is, Sindhu… ❤️
      </motion.h2>

      <motion.p
        className="body-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Somewhere between our random chats, your sweet talks, and your cute little moments,    I ended up falling for you more than I ever expected.
      </motion.p>

      <motion.p
        className="body-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        This whole page, every word, every heart floating around… it is all just to say one simple thing.
      </motion.p>

      <motion.h3
        className="big-confession font-handwriting"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.0 }}
      >
        I really, really like you, Sindhu. 💖
      </motion.h3>

      <motion.p
        className="body-text small-note"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
      >
        
      </motion.p>
    </motion.div>
  );
}
