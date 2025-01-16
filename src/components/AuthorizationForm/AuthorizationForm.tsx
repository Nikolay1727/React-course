import { useState } from "react";
import { Button } from "../Button";
import { InputForm } from "../InputForm";

interface Props {
  onLogin: (name: string) => void;
  onCancel: () => void;
}

export const AuthorizationForm = ({ onLogin, onCancel }: Props) => {
  const [name, setName] = useState("");

  return (
    <div>
      <InputForm label="Имя" value={name} onChange={setName} />
      <Button onClick={onCancel}>Cancel</Button>
      <Button
        onClick={() => {
          onLogin(name);
          setName("");
        }}
      >
        Login
      </Button>
    </div>
  );
};
