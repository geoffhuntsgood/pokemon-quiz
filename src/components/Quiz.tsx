import {
  ArrowCircleRight,
  Cancel,
  PauseCircle,
  PlayCircle
} from "@mui/icons-material";
import { Box } from "@mui/material";
import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import { useReward } from "react-rewards";
import { useStopwatch } from "react-timer-hook";
import type { Settings } from "../classes/Settings";
import { PKTimer, PKTooltip } from "../inputs";
import { PKInput } from "../inputs/PKInput";
import { QuizTable } from "./QuizTable";

export const Quiz = ({
  settings,
  setStart
}: {
  settings: Settings;
  setStart: Dispatch<SetStateAction<boolean>>;
}) => {
  const [headers, setHeaders] = useState<string[]>([]);
  const [foundItems, setFoundItems] = useState<string[]>([]);
  const [done, setDone] = useState(false);

  const stopwatch = useStopwatch({ autoStart: true, interval: 20 });

  const rewardSettings = {
    lifetime: 5000,
    spread: 180,
    elementCount: 50,
    zIndex: 9999,
    emoji: ["🔴", "⚪"]
  };

  const { reward: reward1 } = useReward("finished", "emoji", rewardSettings);
  const { reward: reward2 } = useReward("done", "emoji", rewardSettings);

  const iconSize = window.innerWidth < 800 ? "2rem" : "3rem";

  useEffect(() => {
    if (foundItems.length === settings.items.length) {
      reward1();
      reward2();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [foundItems]);

  useEffect(() => {
    if (settings.items.length > 0) {
      setHeaders(
        "dex" in settings.items[0]
          ? ["Dex", "Name", "Type"]
          : "description" in settings.items[0]
            ? ["Num", "Name", "Desc"]
            : ["Num", "Name", "Type"]
      );
    }
  }, [settings.items]);

  const end = () => {
    stopwatch.pause();
    setDone(true);
  };

  useEffect(() => {
    if (foundItems.length === settings.items.length) {
      end();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [foundItems]);

  return (
    <>
      <span id="finished" />
      <PKTimer stopwatch={stopwatch} />
      <span id="done" style={{ float: "right" }} />

      <Box sx={{ position: "absolute", top: "4rem", right: "5px" }}>
        <PKTooltip
          helpText="Restart?"
          color="darkred"
          onClick={() => setStart(false)}
          icon={<Cancel sx={{ fontSize: iconSize }} />}
        />
        {!done && (
          <>
            <PKTooltip
              helpText="Show Results?"
              color="goldenrod"
              onClick={end}
              icon={<ArrowCircleRight sx={{ fontSize: iconSize }} />}
            />
            {stopwatch.isRunning && (
              <PKTooltip
                helpText="Pause"
                color="green"
                onClick={() => stopwatch.pause()}
                icon={<PauseCircle sx={{ fontSize: iconSize }} />}
              />
            )}
            {!stopwatch.isRunning && (
              <PKTooltip
                helpText="Resume"
                color="green"
                onClick={() => stopwatch.start()}
                icon={<PlayCircle sx={{ fontSize: iconSize }} />}
              />
            )}
          </>
        )}
      </Box>

      <Box sx={{ textAlign: "center" }}>
        <PKInput
          label={settings.label}
          items={settings.items}
          foundItems={foundItems}
          setFoundItems={setFoundItems}
          disabled={!stopwatch.isRunning}
        />
      </Box>

      {window.innerWidth >= 1600 && (
        <>
          <Box sx={{ float: "left", width: "33%", alignItems: "center" }}>
            <QuizTable
              headers={headers}
              items={settings.items.slice(
                0,
                Math.ceil(settings.items.length / 3)
              )}
              foundItems={foundItems}
              done={done}
            />
          </Box>
          <Box sx={{ float: "left", width: "33%", alignItems: "center" }}>
            <QuizTable
              headers={headers}
              items={settings.items.slice(
                Math.ceil(settings.items.length / 3),
                2 * Math.ceil(settings.items.length / 3)
              )}
              foundItems={foundItems}
              done={done}
            />
          </Box>
          <QuizTable
            headers={headers}
            items={settings.items.slice(
              2 * Math.ceil(settings.items.length / 3),
              settings.items.length
            )}
            foundItems={foundItems}
            done={done}
          />
        </>
      )}

      {window.innerWidth >= 800 && window.innerWidth < 1600 && (
        <>
          <Box sx={{ float: "left", width: "50%", alignItems: "center" }}>
            <QuizTable
              headers={headers}
              items={settings.items.slice(
                0,
                Math.ceil(settings.items.length / 2)
              )}
              foundItems={foundItems}
              done={done}
            />
          </Box>
          <QuizTable
            headers={headers}
            items={settings.items.slice(
              Math.ceil(settings.items.length / 2),
              settings.items.length
            )}
            foundItems={foundItems}
            done={done}
          />
        </>
      )}

      {window.innerWidth < 800 && (
        <QuizTable
          headers={headers}
          items={settings.items}
          foundItems={foundItems}
          done={done}
        />
      )}
    </>
  );
};
