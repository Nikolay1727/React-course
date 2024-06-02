import styled from "styled-components";
import { Button } from "../Button";

export const Header = ({ setTheme }: { setTheme: () => void }) => (
  <Container>
    <span>Header</span>
    <Button onClick={setTheme}>Изменить тему</Button>
  </Container>
);

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
