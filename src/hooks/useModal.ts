import { useCallback, useState } from "react";

export const useModal = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const onCloseModal = useCallback(() => {
    setIsOpenModal(false);
  }, []);

  const onOpenModal = useCallback(() => {
    setIsOpenModal(true);
  }, []);

  return { isOpenModal, onCloseModal, onOpenModal };
};
