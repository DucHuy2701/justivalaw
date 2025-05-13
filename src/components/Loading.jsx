import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Loading() {
  const [progress, setProgress] = useState(0); // Progress from 0% to 100%
  const navigate = useNavigate();

  useEffect(() => {
    const totalSteps = 101; // 101 steps (0 to 100 inclusive)
    const totalTime = 3030; // Total time in ms, chosen so intervalTime is integer
    const intervalTime = totalTime / totalSteps; // 30ms per step
    let step = 0;

    const interval = setInterval(() => {
      step += 1;
      const newProgress = step; // Increase by 1% per step
      setProgress(newProgress);

      if (newProgress >= 100) {
        clearInterval(interval);
        console.log("Progress reached 100%");
        navigate("/home"); // Navigate only when animation completes
      }
    }, intervalTime);

    return () => {
      clearInterval(interval);
    };
  }, [navigate]);

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        //background: "linear-gradient(to right, #3a7bd5, #00d2ff)", // Gradient background
        backgroundImage: "url(/images/loading.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "25%", // Image takes up 30% of the screen width
          position: "relative", // For positioning grayscale image
        }}
      >
        <img
          src="/images/jlf_logo.png" // Full-color image
          alt="Loading"
          className="img-fluid"
          style={{
            width: "100%", // Image takes up full width of the parent div (30%)
            opacity: 1, // Fully visible
          }}
        />
        <img
          src="/images/jlf_logo.png" // Grayscale image, clipped
          alt=""
          className="img-fluid"
          style={{
            width: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            opacity: 1,
            filter: "grayscale(100%)", // Grayscale effect
            clipPath: `inset(0 0 0 ${progress}%)`, // Clip from left to right, revealing from right
            transition: "clip-path 0.05s linear",
          }}
        />
        <div
          style={{
            marginTop: "10px", // Small gap between image and percentage
            textAlign: "center",
            color: "#FFD700", // Gold color to match logo
            fontSize: "2rem", // Set to 2rem as requested
            fontWeight: "bold",
          }}
        >
          {Math.round(progress)}%
        </div>
      </div>
    </div>
  );
}

export default Loading;
