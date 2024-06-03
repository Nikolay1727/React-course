import { createContext, ReactNode, useCallback, useState } from "react";

export type ThemeType = "light" | "dark";

interface ThemeContextProps {
  theme: ThemeType;
  setTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: "light",
  setTheme: () => {},
});

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<ThemeType>("light");

  const onChangeTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme: onChangeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
