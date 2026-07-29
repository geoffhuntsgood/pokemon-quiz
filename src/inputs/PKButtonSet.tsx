import { Box, Button, lighten } from "@mui/material";
import type { JSX } from "react";
import { Type } from "../enums";
import { colors } from "../utils/theme";
import type { ButtonFunc, ButtonSet } from "../utils/types";

export const PKButtonSet = ({
  buttonSet,
  handleClick,
  addOn
}: {
  buttonSet: ButtonSet;
  handleClick: (b: ButtonFunc) => void;
  addOn?: JSX.Element;
}) => (
  <Box sx={{ textAlign: "center" }}>
    {buttonSet.map((entry) => {
      const color = colors[entry as Type] || "#DAA520";

      return (
        <Button
          key={entry}
          sx={{
            backgroundColor: color,
            "&:hover": {
              backgroundColor: lighten(color, 0.3)
            }
          }}
          onClick={() => handleClick(entry)}
        >
          {entry}
        </Button>
      );
    })}
    {addOn ? addOn : <></>}
  </Box>
);
