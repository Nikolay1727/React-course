import { Provider } from "react-redux";
import { Layout, Restaurants } from "./components";
import { ThemeContextProvider, UserContextProvider } from "./contexts";
import { store } from "./redux";

export const App = () => (
  <Provider store={store}>
    <ThemeContextProvider>
      <UserContextProvider>
        <Layout>
          <Restaurants />
        </Layout>
      </UserContextProvider>
    </ThemeContextProvider>
  </Provider>
);
