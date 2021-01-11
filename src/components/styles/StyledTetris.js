import styled from "styled-components";

import bgImage from "../../img/bgImage.png";

export const StyledTetrisWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${bgImage}) #000;
  background-size: cover;
  overflow: hidden;
`;

export const StyledTetris = styled.div`
  display: flex;
  aligh-items: flex-start;
  padding: 40px;
  max-width: 900px;
  margin: 0 auto;

  aside {
    width: 100%;
    max-width: 200px;
    display: block;
    padding: 0 20px;
    align-self: flex-end;
    margin-bottom: -20px;
  }
`;
