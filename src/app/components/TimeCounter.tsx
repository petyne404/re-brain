"use client";

import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";

export interface TimeCounterProps {
  name: string;
  partnerName: string;
  emojis: {
    mine: string;
    partner: string;
  };
  targetDate: string;
  createdDate: string;
}

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  total: number;
}

const TimeCounter = ({ counter }: { counter: TimeCounterProps }) => {
  const [now, setNow] = React.useState<Date>(new Date());
  const [mounted, setMounted] = React.useState(false);
  const createdAt = new Date(counter.createdDate);
  const targetDate = new Date(counter.targetDate);

  const calculateTimeRemaining = (): TimeRemaining => {
    const difference = targetDate.getTime() - now.getTime();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, total: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds, total: difference };
  };

  const timeRemaining = calculateTimeRemaining();
  const totalDuration = targetDate.getTime() - createdAt.getTime();
  const remainingTime = timeRemaining.total;
  const progress = Math.max(0, Math.min(1, 1 - remainingTime / totalDuration));
  const percent = (progress * 100).toFixed(2);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const TimeCard = ({ value, label, delay, mounted }) => {
    return (
      <Box
        sx={{
          position: "relative",
          p: 3,
          borderRadius: 2,
          border: "1px solid rgba(255, 255, 255, 0.2)",
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.05))",
          backdropFilter: "blur(16px)",
          boxShadow: 10,
          transform: mounted ? "translateY(0)" : "translateY(32px)",
          opacity: mounted ? 1 : 0,
          transition: "all 700ms ease",
          transitionDelay: `${delay}ms`,
          "&:hover": {
            transform: "scale(1.05)",
            boxShadow: 20,
          },
          overflow: "hidden",
        }}
      >
        {/* Blurred background glow */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            borderRadius: 4,
            background:
              "linear-gradient(135deg, rgba(236,72,153,0.1), rgba(147,51,234,0.1))",
            filter: "blur(16px)",
            zIndex: 1,
          }}
        />
        {/* Main content */}
        <Box sx={{ position: "relative", zIndex: 2 }}>
          <Typography
            variant="h3"
            sx={{
              fontFamily: "monospace",
              fontWeight: "bold",
              color: "white",
              mb: 1,
              letterSpacing: -1,
            }}
          >
            {value.toString().padStart(2, "0")}
          </Typography>
          <Typography
            variant="caption"
            sx={{
              color: "rgba(255, 255, 255, 0.7)",
              textTransform: "uppercase",
              letterSpacing: 2,
              fontWeight: 500,
            }}
          >
            {label}
          </Typography>
        </Box>
        {/* Pulsing dot */}
        <Box
          sx={{
            position: "absolute",
            top: 12,
            right: 12,
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: "linear-gradient(to right, #ec4899, #9333ea)",
            animation: "pulse 2s infinite",
            zIndex: 3,
          }}
        />
        {/* Pulse keyframes */}
        <style jsx global>{`
          @keyframes pulse {
            0%,
            100% {
              transform: scale(1);
              opacity: 1;
            }
            50% {
              transform: scale(1.5);
              opacity: 0.5;
            }
          }
        `}</style>
      </Box>
    );
  };

  if (timeRemaining.total <= 0) {
    return (
      <div className="flex items-center justify-center p-4">
        <div className="text-center">
          <div className="text-8xl mb-6 animate-bounce">🎉</div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            เวลาหมดแล้ว!
          </h1>
          <p className="text-xl text-white/80">
            {counter.emojis.mine} {counter.name} & {counter.partnerName}{" "}
            {counter.emojis.partner}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full mt-5 lg:mt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute top-40 right-20 w-24 h-24 bg-pink-300/20 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/4 w-40 h-40 bg-purple-300/15 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center p-4">
        {/* Header */}
        <div
          className={`text-center mb-12 transform transition-all duration-1000 ${
            mounted ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
          }`}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-4xl">{counter.emojis.mine}</span>
            <span className="text-4xl">{counter.emojis.partner}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 tracking-tight">
            {counter.name} & {counter.partnerName}
          </h1>
          <div className="flex items-center justify-center gap-2 text-white/70">
            <p className="text-lg">
              {targetDate.toLocaleDateString("th-TH")}
            </p>
          </div>
        </div>
        {/* Countdown Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 max-w-4xl w-full">
          <TimeCard
            value={timeRemaining.days}
            label="Days"
            delay={200}
            mounted={0.1}
          />
          <TimeCard
            value={timeRemaining.hours}
            label="Hours"
            delay={400}
            mounted={0.1}
          />
          <TimeCard
            value={timeRemaining.minutes}
            label="Minuts"
            delay={600}
            mounted={0.1}
          />
          <TimeCard
            value={timeRemaining.seconds}
            label="Seconds"
            delay={800}
            mounted={0.1}
          />
        </div>

        {/* Progress Bar */}
        <div
          className={`w-full max-w-2xl mb-8 transform transition-all duration-1000 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "1000ms" }}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2 text-white/80">
              <span className="text-sm font-medium">Progress</span>
            </div>
            <span className="text-white font-bold">{percent}%</span>
          </div>
          <div className="h-3 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
            <div
              className="h-full bg-gradient-to-r from-pink-400 to-purple-500 rounded-full transition-all duration-1000 ease-out relative"
              style={{ width: `${percent}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          className={`text-center text-white/60 transform transition-all duration-1000 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "1200ms" }}
        ></div>
      </div>
    </div>
  );
};

export default TimeCounter;
