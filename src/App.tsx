import { Footer, Header, Restaurants } from "./components";
import { restaurants } from "./constants";

export const App = () => (
  <div>
    <Header />
    <Restaurants restaurants={restaurants} />
    <Footer />
  </div>
);
