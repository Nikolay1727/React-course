import { Footer, Header, Restaurants } from "./components";
import { ScrollProgressBar } from "./components/ScrollProgressBar";
import { restaurants } from "./constants";

export const App = () => (
  <div>
    <Header />
    <ScrollProgressBar />
    <Restaurants restaurants={restaurants} />
    <Footer />
  </div>
);
