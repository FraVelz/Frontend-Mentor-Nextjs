import { describe, expect, it } from "vitest";

import { checkWinner, emptyBoard, isTie, type Mark } from "./game";

describe("checkWinner", () => {
  it("detects a row win for X", () => {
    const board: Mark[] = ["X", "X", "X", "", "", "", "", "", ""];
    expect(checkWinner(board)).toBe("X");
  });

  it("detects a diagonal win for O", () => {
    const board: Mark[] = ["O", "", "", "", "O", "", "", "", "O"];
    expect(checkWinner(board)).toBe("O");
  });

  it("returns null when there is no winner", () => {
    expect(checkWinner(emptyBoard())).toBeNull();
    const board: Mark[] = ["X", "O", "X", "X", "O", "O", "O", "X", "X"];
    expect(checkWinner(board)).toBeNull();
  });
});

describe("isTie", () => {
  it("is true only when board is full and nobody won", () => {
    const board: Mark[] = ["X", "O", "X", "X", "O", "O", "O", "X", "X"];
    expect(isTie(board)).toBe(true);
  });

  it("is false when there is a winner", () => {
    const board: Mark[] = ["X", "X", "X", "O", "O", "", "", "", ""];
    expect(isTie(board)).toBe(false);
  });
});
