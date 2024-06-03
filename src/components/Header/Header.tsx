import { ModalContext, UserContext } from "@/contexts";
import { useContext } from "react";
import styled from "styled-components";
import { Button } from "../Button";
import { ModalUser } from "../ModalUser";

interface Props {
  setTheme: () => void;
}

export const Header = ({ setTheme }: Props) => {
  const { user, setUser } = useContext(UserContext);
  const { isOpenModal, onOpenModal } = useContext(ModalContext);

  return (
    <Container>
      <span>Header</span>
      <Button onClick={setTheme}>Изменить тему</Button>
      {user ? (
        <div>
          <span>{user}</span>
          <Button onClick={() => setUser("")}>Выйти</Button>
        </div>
      ) : (
        <Button onClick={onOpenModal}>Войти</Button>
      )}
      {isOpenModal && <ModalUser />}
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 50px;
  background-color: aquamarine;
`;
