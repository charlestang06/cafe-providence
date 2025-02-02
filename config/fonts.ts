import { Fira_Code as FontMono, Inter as FontSans, Noto_Serif } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const fontSerif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-serif",
});