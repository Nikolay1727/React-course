import { Footer, Header, Restaurants } from "./components";
import { restaurants } from "./constants";
import {
    ModalContextProvider,
    ThemeContextProvider,
    UserContextProvider
} from "./contexts";

export const App = () => {
  return (
    <ThemeContextProvider>
      <ModalContextProvider>
        <UserContextProvider>
          <Header />
          <Restaurants restaurants={restaurants} />
          <Footer />
        </UserContextProvider>
      </ModalContextProvider>
    </ThemeContextProvider>
  );
};
