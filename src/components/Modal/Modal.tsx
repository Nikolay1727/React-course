import { ModalContext } from "@/contexts";
import { useContext } from "react";
import styled from "styled-components";
import { Portal } from "../Portal";

export const Modal = ({ children }: { children: React.ReactNode }) => {
  const { onCloseModal } = useContext(ModalContext);

  return (
    <Portal>
      <Background onClick={onCloseModal}>
        <Container onClick={(event) => event.stopPropagation()}>
          {children}
        </Container>
      </Background>
    </Portal>
  );
};

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: #00000090;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  border-radius: 5px;
  background-color: white;
  width: 500px;
  padding: 20px;
`;
