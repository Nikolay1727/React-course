import { ReactNode, useMemo, useState } from "react";
import { ThemeContext, ThemeType } from "./context";

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<ThemeType>("light");

  const contextValue = useMemo(
    () => ({
      theme,
      setTheme: () => setTheme(theme === "light" ? "dark" : "light"),
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
