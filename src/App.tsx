import { ThemeProvider } from "@mui/material";
import { useState } from "react";
import { Ability, Move, Pokemon } from "./classes";
import { PKTypography } from "./components/PKTypography";
import { PreQuiz } from "./components/quizzes/PreQuiz";
import { Quiz } from "./components/quizzes/Quiz";
import { theme } from "./utils/theme";

const App = () => {
  const [items, setItems] = useState<Pokemon[] | Move[] | Ability[]>([]);
  const [label, setLabel] = useState("");

  return (
    <ThemeProvider theme={theme}>
      {items.length === 0 && (
        <>
          <PKTypography text="Quizémon: Gotta name 'em all!" />
          <hr />
        </>
      )}

      {items.length > 0 && (
        <Quiz label={label} items={items} setItems={setItems} />
      )}

      {items.length === 0 && (
        <PreQuiz setItems={setItems} setLabel={setLabel} />
      )}
    </ThemeProvider>
  );
};

export default App;
