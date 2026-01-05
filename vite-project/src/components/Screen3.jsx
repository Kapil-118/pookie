// Screen3.jsx
import { motion } from "framer-motion";
import { useState } from "react";

const cardsData = [
  {
    id: 1,
    closedText: "Tap to Reveal",
    openText: "You are the most comforting person I know.",
  },
  {
    id: 2,
    closedText: "Tap to Reveal",
    openText: "Your smile makes even the worst days feel okay.",
  },
  {
    id: 3,
    closedText: "Tap to Reveal",
    openText: "I feel lucky every single time I see your name on my screen.",
  },
];

export default function Screen3({ onNext }) {
  const [openCardId, setOpenCardId] = useState(null);

  const toggleCard = (id) => {
    setOpenCardId((prev) => (prev === id ? null : id));
  };

  return (
    <motion.div
      className="card"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="title font-handwriting text-pink-main">
        A few little reasons 💕
      </h2>

      <p className="body-text">
        Tap each card gently. Every one hides a small piece of what my heart feels for you.
      </p>

      <div className="reveal-grid">
        {cardsData.map((card) => {
          const isOpen = openCardId === card.id;
          return (
            <motion.div
              key={card.id}
              className={`reveal-card-container ${
                isOpen ? "reveal-card-open" : "reveal-card-closed"
              }`}
              onClick={() => toggleCard(card.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              <p className="reveal-card-text">
                {isOpen ? card.openText : card.closedText}
              </p>
            </motion.div>
          );
        })}
      </div>

      <motion.button
        className="btn-primary"
        onClick={onNext}
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.95 }}
      >
        One last thing… ✨
      </motion.button>
    </motion.div>
  );
}
