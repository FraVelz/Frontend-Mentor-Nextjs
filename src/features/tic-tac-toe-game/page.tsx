import { Outfit } from "next/font/google";

import { TicTacToeApp } from "./components/tic-tac-toe-app";
import "./style.css";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-tic-outfit",
});

export default function TicTacToeGamePage() {
  return (
    <div className={`${outfit.className} ${outfit.variable} font-sans antialiased`}>
      <TicTacToeApp />
    </div>
  );
}
