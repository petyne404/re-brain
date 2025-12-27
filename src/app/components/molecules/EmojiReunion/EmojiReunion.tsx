"use client";

import { useState, useEffect } from "react";

export default function EmojiReunion() {
  const [countdown, setCountdown] = useState(10);
  const [direction, setDirection] = useState<"in" | "out">("in");
  const [isComplete, setIsComplete] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    // Set initial screen width
    setScreenWidth(window.innerWidth);

    // Update screen width on resize
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    interval = setInterval(() => {
      setCountdown((prev) => {
        if (direction === "in") {
          if (prev <= 0.1) {
            setIsComplete(true);
            setDirection("out");
            return 0;
          }
          return prev - 0.1;
        } else {
          if (prev >= 10) {
            setDirection("in");
            setIsComplete(false);
            return 10;
          }
          return prev + 0.1;
        }
      });
    }, 100);

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [direction]);

  const progress = (10 - countdown) / 10; // 0 to 1
  // Responsive emoji spacing
  let baseX = 150;
  if (screenWidth < 640) baseX = 100; // mobile
  else if (screenWidth < 768) baseX = 170; // small tablet
  else if (screenWidth < 1024) baseX = 180; // medium screen
  else baseX = 200; // large screen

  const leftEmojiX = -baseX + progress * 180;
  const rightEmojiX = baseX - progress * 180;

  return (
    <div>
      <div className="z-10 flex flex-col items-center justify-center">
        <div className="relative w-full max-w-lg h-32 lg:h-64 flex items-center justify-center">
          {/* Left emoji */}
          <div
            className="absolute text-5xl sm:text-6xl md:text-7xl lg:text-8xl transition-all duration-300 ease-out"
            style={{
              transform: `translateX(${leftEmojiX}px) translateY(${
                Math.sin(Date.now() / 1000) * 10
              }px)`,
            }}
          >
            😊
          </div>

          {/* Right emoji */}
          <div
            className="absolute text-5xl sm:text-6xl md:text-7xl lg:text-8xl transition-all duration-300 ease-out"
            style={{
              transform: `translateX(${rightEmojiX}px) translateY(${
                Math.cos(Date.now() / 1000) * 10
              }px)`,
            }}
          >
            💕
          </div>

          {/* Sparkles when meet */}
          {isComplete && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute text-2xl animate-ping"
                  style={{
                    transform: `rotate(${i * 45}deg) translateY(-40px)`,
                    animationDelay: `${i * 0.1}s`,
                  }}
                >
                  ✨
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
