import { ButtonHTMLAttributes } from "react";
import { StyledButton } from "./styled";

type Props = {
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, ...props }: Props) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};
