// App.jsx
import React, { useState } from "react";
import FloatingHearts from "./components/FloatingHearts";
import Screen1 from "./components/Screen1";
import Screen2 from "./components/Screen2";
import Screen3 from "./components/Screen3";
import Screen4 from "./components/Screen4";
import "./index.css";

export default function App() {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 4));

  return (
    <div className="app-container">
      <FloatingHearts />
      <div className="main-content">
        {step === 1 && <Screen1 onNext={nextStep} />}
        {step === 2 && <Screen2 onNext={nextStep} />}
        {step === 3 && <Screen3 onNext={nextStep} />}
        {step === 4 && <Screen4 />}
      </div>
    </div>
  );
}
