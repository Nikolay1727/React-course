import { ThemeType } from "@/contexts";
import { styled } from "styled-components";

export const StyledButton = styled.button<{ contextTheme: ThemeType }>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: ${({ contextTheme }) =>
    contextTheme === "dark" ? "black" : "white"};
  border-color: ${({ contextTheme }) =>
    contextTheme === "dark" ? "white" : "black"};
  color: ${({ contextTheme }) => (contextTheme === "dark" ? "white" : "black")};
`;
