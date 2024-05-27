import { useState } from "react";
import { Container, NavButton } from "./styled";

export interface NavMenuTabs {
  id: string;
  title: string;
  isCheck?: boolean;
}

interface Props {
  tabs: NavMenuTabs[];
  setItemId: (id: string) => void;
}

export const NavMenu = ({ tabs, setItemId }: Props) => {
  const [items, setItems] = useState(
    tabs.map((tab, i) => {
      if (i === 0) {
        return { ...tab, isCheck: true };
      } else {
        return tab;
      }
    })
  );

  const onChange = (id: string) => {
    setItems(
      tabs.map((tab) => {
        if (tab.id === id) {
          return { ...tab, isCheck: true };
        } else {
          return { ...tab, isCheck: false };
        }
      })
    );
    setItemId(id);
  };

  return (
    <Container>
      {items.map((item) => (
        <NavButton
          key={item.id}
          onClick={() => onChange(item.id)}
          isCheck={item.isCheck}
        >
          {item.title}
        </NavButton>
      ))}
    </Container>
  );
};
