import { useModal } from "@/hooks";
import { createContext, ReactNode } from "react";

interface ModalContextProps {
  isOpenModal: boolean;
  onCloseModal: () => void;
  onOpenModal: () => void;
}

export const ModalContext = createContext<ModalContextProps>({
  isOpenModal: false,
  onCloseModal: () => {},
  onOpenModal: () => {},
});

export const ModalContextProvider = ({ children }: { children: ReactNode }) => {
  const { isOpenModal, onCloseModal, onOpenModal } = useModal();

  return (
    <ModalContext.Provider value={{ isOpenModal, onCloseModal, onOpenModal }}>
      {children}
    </ModalContext.Provider>
  );
};
