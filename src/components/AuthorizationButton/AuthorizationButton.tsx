import { useUser } from "@/contexts";
import { useCallback, useState } from "react";
import { AuthorizationForm } from "../AuthorizationForm";
import { Button } from "../Button";
import { Modal } from "../Modal";

export const AuthorizationButton = () => {
  const { user, login, logout } = useUser();
  const [isVisible, setIsVisible] = useState(false);

  const handleClose = useCallback(() => {
    setIsVisible(false);
  }, []);

  const handleLogin = useCallback(
    (name: string) => {
      login(name);
      handleClose();
    },
    [login, handleClose]
  );

  return (
    <div>
      <span>{user}</span>
      {user ? (
        <Button onClick={logout}>Logout</Button>
      ) : (
        <Button onClick={() => setIsVisible(true)}>Login</Button>
      )}
      {isVisible && (
        <Modal onClose={handleClose}>
          <AuthorizationForm onLogin={handleLogin} onCancel={handleClose} />
        </Modal>
      )}
    </div>
  );
};
