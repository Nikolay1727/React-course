import { ThemeContext } from "@/contexts";
import { ButtonHTMLAttributes, useContext } from "react";
import { StyledButton } from "./styled";

type Props = {
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, ...props }: Props) => {
  const contextTheme = useContext(ThemeContext);

  return (
    <StyledButton contextTheme={contextTheme} {...props}>
      {children}
    </StyledButton>
  );
};
