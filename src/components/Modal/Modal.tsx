import { ReactNode } from "react";
import { Button } from "../Button";
import { Portal } from "../Portal";
import { Background, Content } from "./styles";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

export const Modal = ({ children, onClose }: Props) => {
  return (
    <Portal>
      <Background onClick={onClose} />
      <Content>
        <Button onClick={onClose}>Close</Button>
        {children}
      </Content>
    </Portal>
  );
};
