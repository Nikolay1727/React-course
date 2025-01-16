import { Layout, Restaurants } from "./components";
import { restaurants } from "./constants";
import { ThemeContextProvider, UserContextProvider } from "./contexts";

export const App = () => (
  <ThemeContextProvider>
    <UserContextProvider>
      <Layout>
        <Restaurants restaurants={restaurants} />
      </Layout>
    </UserContextProvider>
  </ThemeContextProvider>
);
