import { createContext, ReactNode, useState } from "react";

interface UserContextProps {
  user: string;
  setUser: (name: string) => void;
}

export const UserContext = createContext<UserContextProps>({
  user: "",
  setUser: () => {},
});

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState("");

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
