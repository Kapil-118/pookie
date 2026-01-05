// FloatingHearts.jsx
import React, { useEffect, useState } from "react";

const HEARTS_COUNT = 20;

export default function FloatingHearts() {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const newHearts = Array.from({ length: HEARTS_COUNT }).map((_, index) => ({
      id: index,
      left: Math.random() * 100,
      duration: 8 + Math.random() * 6,
      delay: Math.random() * 5,
      scale: 0.7 + Math.random() * 0.8,
    }));
    setHearts(newHearts);
  }, []);

  return (
    <div aria-hidden="true">
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="floating-heart"
          style={{
            left: `${heart.left}%`,
            animationDuration: `${heart.duration}s`,
            animationDelay: `${heart.delay}s`,
            transform: `scale(${heart.scale})`,
          }}
        >
          ❤️
        </span>
      ))}
    </div>
  );
}
