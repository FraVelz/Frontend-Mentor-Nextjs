import { Outfit } from "next/font/google";

import { FmAttribution } from "@/components/ui/fm-attribution";

import { TicTacToeApp } from "./components/tic-tac-toe-app";
import "./style.css";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-tic-outfit",
});

export default function TicTacToeGamePage() {
  return (
    <div className={`${outfit.className} ${outfit.variable} flex min-h-screen flex-col font-sans antialiased`}>
      <div className="flex-1">
        <TicTacToeApp />
      </div>
      <FmAttribution
        challengeName="Tic Tac Toe game"
        challengeUrl="https://www.frontendmentor.io/challenges/tic-tac-toe-game-Re7ZF_E2v"
        variant="dark"
      />
    </div>
  );
}
