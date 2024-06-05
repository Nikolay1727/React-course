import { Provider } from "react-redux";
import { Footer, Header, Restaurants } from "./components";
import { restaurants } from "./constants";
import {
    ModalContextProvider,
    ThemeContextProvider,
    UserContextProvider
} from "./contexts";
import { store } from "./redux";

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <ModalContextProvider>
          <UserContextProvider>
            <Header />
            <Restaurants restaurants={restaurants} />
            <Footer />
          </UserContextProvider>
        </ModalContextProvider>
      </ThemeContextProvider>
    </Provider>
  );
};
