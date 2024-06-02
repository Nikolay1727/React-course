import { Button } from "../Button";

interface Props {
  children: React.ReactNode;
  isCheck: boolean;
  onClick: () => void;
}

export const RatingButton = ({ children, isCheck, onClick }: Props) => (
  <Button
    type="button"
    style={{ backgroundColor: isCheck ? "yellow" : "white" }}
    onClick={onClick}
  >
    {children}
  </Button>
);
