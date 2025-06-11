"use client";
import TextArea from "@/app/components/TextArea";
import { theme } from "@/app/theme";
import {
  alpha,
  Box,
  Container,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import React, { useState, useEffect } from "react";

// Add type definitions at the top
interface KeyboardMapping {
  [key: string]: string;
}

type ConversionDirection = "thai" | "english" | null;

// Update BoxStyled component with proper types
interface BoxStyledProps {
  children: React.ReactNode;
}

const BoxStyled: React.FC<BoxStyledProps> = ({ children }) => {
  return (
    <Box
      sx={{
        outline: (theme) => `1px solid ${theme.palette.primary.main}`,
        background: (theme) => `linear-gradient(45deg, 
          ${alpha(theme.palette.grey[600], 0.4)},
          ${alpha(theme.palette.grey[400], 0.1)}
        )`,
        padding: 2,
        width: "50%",
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      {children}
    </Box>
  );
};

// Thai to English keyboard mapping - ครบทุกปุ่มคีย์บอร์ด
const TH_TO_EN: KeyboardMapping = {
  // แถวบน (number row)
  ๅ: "1",
  "/": "2",
  "-": "3",
  ภ: "4",
  ถ: "5",
  "ุ": "6",
  "ึ": "7",
  ค: "8",
  ต: "9",
  จ: "0",
  ข: "-",
  ช: "=",
  // แถว QWERTY
  ๆ: "q",
  ไ: "w",
  ำ: "e",
  พ: "r",
  ะ: "t",
  "ั": "y",
  "ี": "u",
  ร: "i",
  น: "o",
  ย: "p",
  บ: "[",
  ล: "]",
  ฃ: "\\",
  // แถว ASDF
  ฟ: "a",
  ห: "s",
  ก: "d",
  ด: "f",
  เ: "g",
  "้": "h",
  "่": "j",
  า: "k",
  ส: "l",
  ว: ";",
  ง: "'",
  // แถว ZXCV
  ผ: "z",
  ป: "x",
  แ: "c",
  อ: "v",
  "ิ": "b",
  "ื": "n",
  ท: "m",
  ม: ",",
  ใ: ".",
  ฝ: "/",

  // Shift + number row
  "+": "!",
  "๑": "@",
  "๒": "#",
  "๓": "$",
  "๔": "%",
  "ู": "^",
  "฿": "&",
  "๕": "*",
  "๖": "(",
  "๗": ")",
  "๘": "_",
  "๙": "+",
  // Shift + QWERTY
  "๐": "Q",
  '"': "W",
  ฎ: "E",
  ฑ: "R",
  ธ: "T",
  "ํ": "Y",
  "๊": "U",
  ณ: "I",
  ฯ: "O",
  ญ: "P",
  ฐ: "{",
  ",": "}",
  ฅ: "|",
  // Shift + ASDF
  ฤ: "A",
  ฆ: "S",
  ฏ: "D",
  โ: "F",
  ฌ: "G",
  "็": "H",
  "๋": "J",
  ษ: "K",
  ศ: "L",
  ซ: ":",
  ".": '"',
  // Shift + ZXCV
  "(": "Z",
  ")": "X",
  ฉ: "C",
  ฮ: "V",
  "ฺ": "B",
  "์": "N",
  "?": "M",
  ฒ: "<",
  ฬ: ">",
  ฦ: "?",
};

// สร้าง mapping จาก English เป็น Thai โดยใช้ Object.fromEntries และ map
const EN_TO_TH: KeyboardMapping = Object.fromEntries(
  Object.entries(TH_TO_EN).map(([th, en]) => [en, th])
);

// Function to detect language
const detectLanguage = (text: string): "thai" | "english" => {
  let thaiCount = 0;
  let englishCount = 0;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (/[\u0E00-\u0E7F]/.test(char)) {
      // Thai Unicode range
      thaiCount++;
    } else if (/[a-zA-Z0-9]/.test(char)) {
      englishCount++;
    }
  }

  return thaiCount > englishCount ? "thai" : "english";
};

// Function to convert text
const convertText = (
  text: string,
  forcedDirection: ConversionDirection = null
): string => {
  if (!text) return "";

  const detectedLang = forcedDirection || detectLanguage(text);
  let result = "";

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (detectedLang === "thai") {
      result += TH_TO_EN[char] || char;
    } else {
      result += EN_TO_TH[char] || char;
    }
  }

  return result;
};

const Page = () => {
  const [inputText, setInputText] = useState<string>("");
  const [outputText, setOutputText] = useState<string>("");
  const [autoConvert, setAutoConvert] = useState<boolean>(true);
  const [conversionDirection, setConversionDirection] =
    useState<ConversionDirection>(null);

  // Handle input change and auto conversion
  useEffect(() => {
    if (inputText.length === 0) {
      setOutputText("");
    }
    if (autoConvert && inputText) {
      setOutputText(convertText(inputText, conversionDirection));
    }
  }, [inputText, autoConvert, conversionDirection]);

  // Handle manual conversion
  const handleConvert = () => {
    setOutputText(convertText(inputText, conversionDirection));
  };

  // Toggle conversion direction
  const toggleDirection = () => {
    setConversionDirection((prev) => {
      if (prev === "thai") return "english";
      if (prev === "english") return null; // Auto
      return "thai"; // If null (auto), set to thai
    });
  };

  // Get direction text for display
  const getDirectionText = () => {
    if (conversionDirection === "thai") return "Thai → English";
    if (conversionDirection === "english") return "English → Thai";
    return "Auto Detect";
  };

  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        flexDirection: "column",
        mt: { xs: 4, lg: 4 },
        width: "100%",
        gap: 3,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          flexDirection: "column",
        }}
      >
        <Typography variant="h4" component="h1">
          Thai-English Keyboard Layout Converter
        </Typography>
        <Typography>
          Ever started typing a message only to realize it&apos;s in the wrong
          language? The language converter feature helps prevent this by
          allowing users to quickly switch between languages on their keyboard.
          Whether you&apos;re typing in English or Thai, this feature ensures your
          text appears just as you intended.
        </Typography>
        <Button
          variant="outlined"
          onClick={() => setAutoConvert((prev) => !prev)}
          color={autoConvert ? "success" : "primary"}
        >
          {autoConvert ? "Auto: ON" : "Auto: OFF"}
        </Button>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: 1,
        }}
      >
        <Button
          variant="contained"
          onClick={toggleDirection}
          endIcon={<SwapHorizIcon />}
        >
          {getDirectionText()}
        </Button>
      </Box>

      <Box
        sx={{ display: "flex", flexDirection: "row", width: "100%", gap: 5 }}
      >
        <BoxStyled>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Input
          </Typography>
          <TextArea
            title="input"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          {!autoConvert && (
            <Button
              variant="contained"
              sx={{ mt: 3, alignSelf: "center" }}
              onClick={handleConvert}
            >
              Convert
            </Button>
          )}
        </BoxStyled>
        <BoxStyled>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Output
          </Typography>
          <TextArea
            title="output"
            value={outputText}
            onChange={(e) => setOutputText(e.target.value)}
          />
          <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
            <Button
              variant="outlined"
              onClick={() => {
                navigator.clipboard.writeText(outputText);
              }}
            >
              Copy to Clipboard
            </Button>
          </Box>
        </BoxStyled>
      </Box>
    </Container>
  );
};

export default Page;
