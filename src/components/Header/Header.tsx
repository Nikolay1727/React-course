import styled from "styled-components";
import { ThemeToggler } from "../ThemeToggler";

export const Header = () => (
  <Container>
    <span>Header</span>
    <ThemeToggler />
  </Container>
);

const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background-color: aquamarine;
`;
