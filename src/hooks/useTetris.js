import { useState, useCallback } from "react";
import { randomTetrominos, TETROMINOS } from "../tetrominos";
import { STAGE_WIDTH } from "../gameHelpers";

export const useTetris = () => {
  const [tetris, setTetris] = useState({
    pos: { x: 0, y: 0 },
    tetromino: TETROMINOS[0].shape,
    collided: false,
  });

  const updateTetrisPos = ({ x, y, collided }) => {
    //console.log(x);
    setTetris((prev) => ({
      ...prev,
      pos: { x: (prev.pos.x += x), y: (prev.pos.y += y) },
      collided,
    }));
  };

  const resetTetris = useCallback(() => {
    setTetris({
      pos: { x: STAGE_WIDTH / 2 - 2, y: 0 },
      tetromino: randomTetrominos().shape,
      collided: false,
    });
  }, []);
  return [tetris, resetTetris, updateTetrisPos];
};
