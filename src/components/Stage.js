import React from "react";
import Cell from "./Cell";
import { StyledStage } from "./styles/StyledStage";

export default function Stage({ stage }) {
  // console.log(stage);
  return (
    <StyledStage height={stage.length} width={stage[0].length}>
      {stage.map((row) =>
        row.map((cell, x) => <Cell key={x} type={cell[0]} />)
      )}
    </StyledStage>
  );
}
