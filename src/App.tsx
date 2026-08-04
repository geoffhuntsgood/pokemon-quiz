import { ThemeProvider, Typography } from "@mui/material";
import { useState } from "react";
import { Settings } from "./classes/Settings";
import { Configuration } from "./components/Configuration";
import { Quiz } from "./components/Quiz";
import { theme } from "./utils/theme";

const App = () => {
  const defaultLabel = "Pokémon Quiz: Gotta name 'em all!";

  const [start, setStart] = useState(false);

  const [settings, setSettings] = useState<Settings>({
    label: defaultLabel,
    items: []
  });

  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h1">
        {settings.label !== defaultLabel
          ? `Quiz: ${settings.label}`
          : settings.label}
      </Typography>

      {!start && (
        <Configuration setSettings={setSettings} setStart={setStart} />
      )}

      {start && <Quiz settings={settings} setSettings={setSettings} setStart={setStart} />}
    </ThemeProvider>
  );
};

export default App;
