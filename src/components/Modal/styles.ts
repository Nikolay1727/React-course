import styled from "styled-components";

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: grey;
  opacity: 0.3;
  z-index: 1;
`;

export const Content = styled.div`
  position: absolute;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  z-index: 2;
`;
