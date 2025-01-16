import { Footer, Header, Restaurants } from "./components";
import { ScrollProgressBar } from "./components/ScrollProgressBar";
import { restaurants } from "./constants";
import { ThemeContextProvider } from "./contexts";

export const App = () => (
  <ThemeContextProvider>
    <div>
      <Header />
      <ScrollProgressBar />
      <Restaurants restaurants={restaurants} />
      <Footer />
    </div>
  </ThemeContextProvider>
);
