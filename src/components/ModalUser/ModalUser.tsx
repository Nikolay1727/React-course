import { ModalContext, UserContext } from "@/contexts";
import { useContext, useState } from "react";
import { Button } from "../Button";
import { InputForm } from "../InputForm";
import { Modal } from "../Modal";

export const ModalUser = () => {
  const { setUser } = useContext(UserContext);
  const { onCloseModal } = useContext(ModalContext);

  const [userName, setUserName] = useState("");

  const handleSubmit = () => {
    setUser(userName);
    onCloseModal();
  };

  return (
    <Modal>
      <form onSubmit={handleSubmit}>
        <InputForm
          label="Имя"
          value={userName}
          onChange={(value) => setUserName(value)}
        />
        <div style={{ display: "flex", gap: "20px" }}>
          <Button type="button" onClick={onCloseModal}>
            Отмена
          </Button>
          <Button type="button" onClick={handleSubmit} disabled={!userName}>
            Войти
          </Button>
        </div>
      </form>
    </Modal>
  );
};
