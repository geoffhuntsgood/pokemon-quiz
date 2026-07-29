import { Typography } from "@mui/material";
import type { useStopwatchResultType } from "react-timer-hook/dist/types/src/useStopwatch";

export const PKTimer = ({
  stopwatch
}: {
  stopwatch: useStopwatchResultType;
}) => {
  const { seconds, minutes, hours, isRunning } = stopwatch;

  return (
    <Typography
      color="textPrimary"
      variant="h2"
      sx={!isRunning ? { animation: "pauseTimer 2s infinite" } : {}}
    >
      {hours}:{String(minutes).padStart(2, "0")}:
      {String(seconds).padStart(2, "0")}
    </Typography>
  );
};
