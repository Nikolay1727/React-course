import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 30px;
  gap: 30px;
`;

export const NavButton = styled.button<{ isCheck?: boolean }>`
  text-decoration: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
  background-color: white;
  border-bottom: ${({ isCheck }) => isCheck && "1px solid green"};
`;
