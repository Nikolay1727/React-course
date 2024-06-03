import { ThemeContext } from "@/contexts";
import { ButtonHTMLAttributes, useContext } from "react";
import { StyledButton } from "./styled";

type Props = {
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, ...props }: Props) => {
  const { theme } = useContext(ThemeContext);

  return (
    <StyledButton contextTheme={theme} {...props}>
      {children}
    </StyledButton>
  );
};
