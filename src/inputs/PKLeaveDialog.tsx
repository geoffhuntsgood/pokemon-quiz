import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography
} from "@mui/material";
import { type Dispatch, type SetStateAction } from "react";

export const PKLeaveDialog = ({
  title,
  description,
  open,
  setOpen,
  handleYesAction,
  handleNoAction,
  yesLabel,
  noLabel
}: {
  title: string;
  description: string;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  handleYesAction: () => void;
  handleNoAction: () => void;
  yesLabel: string;
  noLabel: string;
}) => (
  <Dialog open={open} onClose={setOpen}>
    <DialogTitle>{title}</DialogTitle>
    <DialogContent>
      <Typography color="textPrimary" variant="h3">
        {description}
      </Typography>
    </DialogContent>
    <DialogActions>
      <Button sx={{ backgroundColor: "goldenrod" }} onClick={handleYesAction}>
        {yesLabel}
      </Button>
      <Button
        sx={{ backgroundColor: "goldenrod" }}
        onClick={() => {
          handleNoAction();
          setOpen(false);
        }}
      >
        {noLabel}
      </Button>
    </DialogActions>
  </Dialog>
);
