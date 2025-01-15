import { useReducer } from "react";
import styled from "styled-components";
import { Button } from "../Button";
import { InputForm } from "../InputForm";
import { RatingButtons } from "../RatingButtons";
import { ActionType, INITIAL_VALUE, reducer } from "./reducer";

interface Props {
  closeForm: () => void;
}

export const ReviewForm = ({ closeForm }: Props) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_VALUE);

  const handleSubmit = () => {
    for (const type of Object.keys(INITIAL_VALUE)) {
      dispatch({ type: type as ActionType, payload: "" });
    }
    closeForm();
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <InputForm
        label="Имя"
        value={state.name}
        onChange={(payload) => dispatch({ type: "name", payload })}
      />
      <InputForm
        label="Текст"
        value={state.text}
        onChange={(payload) => dispatch({ type: "text", payload })}
      />
      <RatingButtons
        currentValue={state.rating}
        onChange={(payload) => dispatch({ type: "rating", payload })}
      />
      <Button type="button" onClick={handleSubmit}>
        Сохранить
      </Button>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 20px;
  width: max-content;
`;
