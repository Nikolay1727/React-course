import { createContext } from "react";

interface UserContextProps {
  user: string;
  login: (name: string) => void;
  logout: () => void;
}

export const UserContext = createContext<UserContextProps>({
  user: "",
  login: () => {},
  logout: () => {},
});
