import { useTheme } from "@/contexts";
import { ButtonHTMLAttributes } from "react";
import { StyledButton } from "./styled";

type Props = {
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, ...props }: Props) => {
  const { theme } = useTheme();

  return (
    <StyledButton contextTheme={theme} {...props}>
      {children}
    </StyledButton>
  );
};
