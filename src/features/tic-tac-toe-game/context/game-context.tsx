"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

export type Mark = "X" | "O" | "";

export interface Player {
  id: 1 | 2;
  mark: Mark;
  wins: number;
}

export type Gamemode = "solo" | "multi";

interface GameContextValue {
  isGameStarted: boolean;
  startGame: (mark: Mark, mode?: Gamemode) => void;
  resetGame: () => void;
  playRound: (index: number) => void;
  board: Mark[];
  player1: Player;
  player2: Player;
  currentPlayer: Player | null;
  gamemode: Gamemode;
  paused: boolean;
  setPaused: (v: boolean) => void;
  winner: Mark | null;
  isTie: boolean;
  ties: number;
  nextRound: () => void;
}

const GameContext = createContext<GameContextValue | null>(null);

const emptyBoard = (): Mark[] => ["", "", "", "", "", "", "", "", ""];

function checkWinner(board: Mark[]): Mark | null {
  const patterns: [number, number, number][] = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const [a, b, c] of patterns) {
    const m = board[a];
    if (m && m === board[b] && m === board[c]) return m;
  }
  return null;
}

function cpuMove(boardState: Mark[]): number {
  const empty = boardState
    .map((val, i) => (val === "" ? i : null))
    .filter((i): i is number => i !== null);
  return empty[Math.floor(Math.random() * empty.length)]!;
}

export function GameProvider({ children }: { children: ReactNode }) {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [board, setBoard] = useState<Mark[]>(emptyBoard);
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);
  const [gamemode, setGamemode] = useState<Gamemode>("solo");
  const [winner, setWinner] = useState<Mark | null>(null);
  const [isTie, setIsTie] = useState(false);
  const [ties, setTies] = useState(0);
  const [paused, setPaused] = useState(false);

  const [player1, setPlayer1] = useState<Player>({ id: 1, mark: "", wins: 0 });
  const [player2, setPlayer2] = useState<Player>({ id: 2, mark: "", wins: 0 });

  function handleGameState(newBoard: Mark[]) {
    const win = checkWinner(newBoard);

    if (win) {
      setWinner(win);

      setPlayer1((p) => (p.mark === win ? { ...p, wins: p.wins + 1 } : p));
      setPlayer2((p) => (p.mark === win ? { ...p, wins: p.wins + 1 } : p));

      return true;
    }

    if (newBoard.every((cell) => cell !== "")) {
      setIsTie(true);
      setTies((prev) => prev + 1);
      return true;
    }

    return false;
  }

  function runCpuTurn(boardState: Mark[], cpuPlayer: Player) {
    const move = cpuMove(boardState);

    return boardState.map((cell, i) => (i === move ? cpuPlayer.mark : cell));
  }

  function startGame(mark: Mark, mode: Gamemode = "solo") {
    const p1Mark: Mark = mark === "X" ? "X" : "O";
    const p2Mark: Mark = mark === "X" ? "O" : "X";

    const p1: Player = { ...player1, mark: p1Mark };
    const p2: Player = { ...player2, mark: p2Mark };

    setPlayer1(p1);
    setPlayer2(p2);

    const starter = p1.mark === "X" ? p1 : p2;

    setCurrentPlayer(starter);
    setGamemode(mode);
    setIsGameStarted(true);

    if (mode === "solo" && starter.id === 2) {
      setTimeout(() => {
        const cpuBoard = runCpuTurn(emptyBoard(), p2);
        setBoard(cpuBoard);

        if (!handleGameState(cpuBoard)) setCurrentPlayer(p1);
      }, 800);
    }
  }

  function playRound(index: number) {
    if (!currentPlayer) return;
    if (board[index] || winner || isTie) return;
    if (gamemode === "solo" && currentPlayer.id === 2) return;

    const newBoard = board.map((cell, i) => (i === index ? currentPlayer.mark : cell));

    setBoard(newBoard);

    if (handleGameState(newBoard)) return;

    const nextPlayer = currentPlayer.id === 1 ? player2 : player1;
    setCurrentPlayer(nextPlayer);

    if (gamemode === "solo") {
      setTimeout(() => {
        const cpuBoard = runCpuTurn(newBoard, nextPlayer);

        setBoard(cpuBoard);

        if (handleGameState(cpuBoard)) return;

        setCurrentPlayer(player1);
      }, 800);
    }
  }

  function nextRoundCb() {
    setBoard(emptyBoard());
    setWinner(null);
    setIsTie(false);

    const starter = player1.mark === "X" ? player1 : player2;
    setCurrentPlayer(starter);

    if (gamemode === "solo" && starter.id === 2) {
      setTimeout(() => {
        const cpuBoard = runCpuTurn(emptyBoard(), player2);
        setBoard(cpuBoard);

        if (!handleGameState(cpuBoard)) setCurrentPlayer(player1);
      }, 800);
    }
  }

  function resetGame() {
    setIsGameStarted(false);
    setBoard(emptyBoard());
    setCurrentPlayer(null);
    setGamemode("solo");
    setWinner(null);
    setIsTie(false);
    setTies(0);
    setPaused(false);

    setPlayer1({ id: 1, mark: "", wins: 0 });
    setPlayer2({ id: 2, mark: "", wins: 0 });
  }

  const value: GameContextValue = {
    isGameStarted,
    startGame,
    resetGame,
    playRound,
    board,
    player1,
    player2,
    currentPlayer,
    gamemode,
    paused,
    setPaused,
    winner,
    isTie,
    ties,
    nextRound: nextRoundCb,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export function useGame() {
  const ctx = useContext(GameContext);
  if (!ctx) throw new Error("useGame must be used inside GameProvider");
  return ctx;
}
