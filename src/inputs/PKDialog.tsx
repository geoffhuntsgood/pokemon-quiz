import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField
} from "@mui/material";
import { useState, type Dispatch, type SetStateAction } from "react";
import { PKButtonSet } from "./PKButtonSet";

export const PKDialog = ({
  title,
  label,
  open,
  setOpen,
  handleAction
}: {
  title: string;
  label: string;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  handleAction: Function;
}) => {
  const [value, setValue] = useState("");

  return (
    <Dialog open={open} onClose={setOpen}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <TextField
          slotProps={{
            htmlInput: {
              maxLength: "10"
            }
          }}
          autoFocus
          variant="filled"
          label={label}
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <PKButtonSet
          buttonSet={["Save"]}
          handleClick={() => {
            handleAction(value);
            setOpen(false);
          }}
        />
      </DialogActions>
    </Dialog>
  );
};
