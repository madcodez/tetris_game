import { useState, useEffect } from "react";
import { createStage } from "../gameHelpers";

export const useStage = (tetris, resetTetris) => {
  const [stage, setStage] = useState(createStage());

  useEffect(() => {
    const updateStage = (prevStage) => {
      // First flush the stage
      const newStage = prevStage.map((row) =>
        row.map((cell) => (cell[1] === "clear" ? [0, "clear"] : cell))
      );

      // Then draw the tetromino
      tetris.tetromino.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value !== 0) {
            newStage[y + tetris.pos.y][x + tetris.pos.x] = [
              value,
              `${tetris.collided ? "merged" : "clear"}`,
            ];
          }
        });
      });
      // Then check if we collided
      if (tetris.collided) {
        resetTetris();
      }

      return newStage;
    };

    setStage((prev) => updateStage(prev));
  }, [tetris, resetTetris]);

  return [stage, setStage];
};
