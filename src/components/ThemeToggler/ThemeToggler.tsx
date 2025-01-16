import { useTheme } from "@/contexts";
import { Button } from "../Button";

export const ThemeToggler = () => {
  const { setTheme } = useTheme();

  return <Button onClick={setTheme}>Изменить тему</Button>;
};
