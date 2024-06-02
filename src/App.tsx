import { useState } from "react";
import { Footer, Header, Restaurants } from "./components";
import { restaurants } from "./constants";
import { ThemeContext, ThemeType, UserContext } from "./contexts";

export const App = () => {
  const [theme, setTheme] = useState<ThemeType>("light");
  const [user, setUser] = useState("");

  return (
    <ThemeContext.Provider value={theme}>
      <UserContext.Provider value={user}>
        <Header
          setTheme={() =>
            setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
          }
          setUser={setUser}
        />
        <Restaurants restaurants={restaurants} />
        <Footer />
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
};
