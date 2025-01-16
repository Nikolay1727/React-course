import { ReactNode } from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { ScrollProgressBar } from "../ScrollProgressBar";
import { ContentContainer, ModalContainer } from "./styles";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <ModalContainer id="modal" />
      <ContentContainer>
        <Header />
        <ScrollProgressBar />
        {children}
        <Footer />
      </ContentContainer>
    </div>
  );
};
