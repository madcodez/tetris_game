import React, { useState } from "react";

import { createStage, checkCollision } from "../gameHelpers";

// Styled Components
import { StyledTetrisWrapper, StyledTetris } from "./styles/StyledTetris";

// Custom Hooks
import { useTetris } from "../hooks/useTetris";
import { useStage } from "../hooks/useStage";

// Components
import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";

const Tetris = () => {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const [tetris, updateTetrisPos, resetTetris] = useTetris();
  const [stage, setStage] = useStage(tetris, resetTetris);

  console.log("re-render");

  const movePlayer = (dir) => {
    if (!checkCollision(tetris, stage, { x: dir, y: 0 })) {
      updateTetrisPos({ x: dir, y: 0 });
    }
  };

  const startGame = () => {
    console.log("test");
    // Reset everything
    setStage(createStage());
    resetTetris();
    setGameOver(false);
  };

  const drop = () => {
    if (!checkCollision(tetris, stage, { x: 0, y: 1 })) {
      updateTetrisPos({ x: 0, y: 1, collided: false });
    } else {
      // Game Over
      if (tetris.pos.y < 1) {
        console.log("GAME OVER!!!");
        setGameOver(true);
        setDropTime(null);
      }
      updateTetrisPos({ x: 0, y: 0, collided: true });
    }
  };

  const dropPlayer = () => {
    drop();
  };

  const move = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 37) {
        movePlayer(-1);
      } else if (keyCode === 39) {
        movePlayer(1);
      } else if (keyCode === 40) {
        dropPlayer();
      }
    }
  };

  return (
    <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={(e) => move(e)}>
      <StyledTetris>
        <Stage stage={stage} />
        <aside>
          {gameOver ? (
            <Display gameOver={gameOver} text="Game Over" />
          ) : (
            <div>
              <Display text="Score" />
              <Display text="Rows" />
              <Display text="Level" />
            </div>
          )}
          <StartButton callback={startGame} />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;
