import { IconButton, Tooltip } from "@mui/material";
import type { JSX, MouseEventHandler } from "react";

export const PKTooltip = ({
  helpText,
  color,
  onClick,
  icon
}: {
  helpText: string;
  color: string;
  onClick: MouseEventHandler;
  icon: JSX.Element;
}) => (
  <Tooltip arrow title={helpText}>
    <IconButton sx={{ color: color }} onClick={onClick}>
      {icon}
    </IconButton>
  </Tooltip>
);
