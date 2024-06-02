import { useState } from "react";
import { Footer, Header, Restaurants } from "./components";
import { restaurants } from "./constants";
import { ThemeContext, ThemeType } from "./contexts";

export const App = () => {
  const [theme, setTheme] = useState<ThemeType>("light");

  return (
    <ThemeContext.Provider value={theme}>
      <Header
        setTheme={() =>
          setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
        }
      />
      <Restaurants restaurants={restaurants} />
      <Footer />
    </ThemeContext.Provider>
  );
};
