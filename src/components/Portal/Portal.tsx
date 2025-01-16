import { createPortal } from "react-dom";

export const Portal = ({ children }: { children?: React.ReactNode }) => {
  return typeof document === "object"
    ? createPortal(children, document.body)
    : null;
};
