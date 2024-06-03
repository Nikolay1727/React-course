import { useState } from "react";
import { Footer, Header, Restaurants } from "./components";
import { restaurants } from "./constants";
import {
    ModalContextProvider,
    ThemeContext,
    ThemeType,
    UserContextProvider
} from "./contexts";

export const App = () => {
  const [theme, setTheme] = useState<ThemeType>("light");

  return (
    <ThemeContext.Provider value={theme}>
      <ModalContextProvider>
        <UserContextProvider>
          <Header
            setTheme={() =>
              setTheme((prevTheme) =>
                prevTheme === "light" ? "dark" : "light"
              )
            }
          />
          <Restaurants restaurants={restaurants} />
          <Footer />
        </UserContextProvider>
      </ModalContextProvider>
    </ThemeContext.Provider>
  );
};
