import { tabActions } from "@/redux/entities";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Container, NavButton } from "./styled";

export interface NavMenuTabs {
  id: string;
  title: string;
  isCheck?: boolean;
}

interface Props {
  tabs: NavMenuTabs[];
}

export const NavMenu = ({ tabs }: Props) => {
  const dispatch = useDispatch();

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
    dispatch(tabActions.setTab(id));
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
