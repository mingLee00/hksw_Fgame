import React, { useState, useEffect } from "react";
import useInterval from "react-useinterval";
import "./App.css";

const App = () => {
  const [birdTop, setBirdTop] = useState(300);
  const [birdLeft, setBirdLeft] = useState(100);
  const [gapTop, setGapTop] = useState(300);
  const [pipeLeft, setPipeLeft] = useState(1000);

  const jump = () => {
    setBirdTop((prevTop) => Math.max(prevTop - 50, 0));
  };

  useEffect(() => {
    window.addEventListener("keydown", jump);
    return () => {
      window.removeEventListener("keydown", jump);
    };
  }, []);

  useInterval(() => {
    setBirdTop((prevTop) => Math.min(prevTop + 10, 600));
  }, 100);

  useInterval(() => {
    setPipeLeft((prevLeft) => {
      if (prevLeft < -100) {
        setGapTop(Math.random() * 400);
        return 1000;
      } else {
        return prevLeft - 10;
      }
    });
  }, 100);

  return (
    <div className="App">
      <div className="bird" style={{ top: birdTop, left: birdLeft }} />
      <div className="pipe" style={{ left: pipeLeft, top: gapTop - 650 }} />
      <div className="pipe" style={{ left: pipeLeft, top: gapTop + 200 }} />
    </div>
  );
};

export default App;
