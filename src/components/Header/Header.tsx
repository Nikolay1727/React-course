import { UserContext } from "@/contexts";
import { useContext } from "react";
import styled from "styled-components";
import { Button } from "../Button";

interface Props {
  setTheme: () => void;
  setUser: (user: string) => void;
}

export const Header = ({ setTheme, setUser }: Props) => {
  const contextUser = useContext(UserContext);

  return (
    <Container>
      <span>Header</span>
      <Button onClick={setTheme}>Изменить тему</Button>
      {contextUser ? (
        <div>
          <span>{contextUser}</span>
          <Button onClick={() => setUser("")}>Выйти</Button>
        </div>
      ) : (
        <Button onClick={() => setUser("user")}>Войти</Button>
      )}
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
