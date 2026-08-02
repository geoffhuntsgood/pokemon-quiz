import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import type { Dispatch, SetStateAction } from "react";

export const PKDialog = ({
  open,
  setOpen
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => (
  <Dialog open={open} onClose={setOpen}>
    <DialogTitle>Log in</DialogTitle>
    <DialogContent>
      Enter your name here to retrieve/save your best times!
    </DialogContent>
  </Dialog>
);
