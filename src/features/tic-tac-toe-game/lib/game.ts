export type Mark = "X" | "O" | "";

export const emptyBoard = (): Mark[] => ["", "", "", "", "", "", "", "", ""];

const WIN_PATTERNS: [number, number, number][] = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

/** Returns the winning mark, or null if nobody has three in a row. */
export function checkWinner(board: Mark[]): Mark | null {
  for (const [a, b, c] of WIN_PATTERNS) {
    const m = board[a];
    if (m && m === board[b] && m === board[c]) return m;
  }
  return null;
}

export function isBoardFull(board: Mark[]): boolean {
  return board.every((cell) => cell !== "");
}

export function isTie(board: Mark[]): boolean {
  return !checkWinner(board) && isBoardFull(board);
}
