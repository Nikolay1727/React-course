import styled from "styled-components";
import { AuthorizationButton } from "../AuthorizationButton";
import { ThemeToggler } from "../ThemeToggler";

export const Header = () => (
  <Container>
    <span>Header</span>
    <ThemeToggler />
    <AuthorizationButton />
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
