import { TextField } from "@mui/material";
import { useState, type Dispatch, type SetStateAction } from "react";
import type { ItemList } from "../utils/types";

export const PKInput = ({
  label,
  items,
  foundItems,
  setFoundItems,
  disabled
}: {
  label: string;
  items: ItemList;
  foundItems: string[];
  setFoundItems: Dispatch<SetStateAction<string[]>>;
  disabled: boolean;
}) => {
  const [input, setInput] = useState("");

  const compareInput = (newVal: string) => {
    setInput(newVal);
    const add = [...foundItems];
    const sanitized = newVal
      .replace(new RegExp(/é/g), "e")
      .replace(new RegExp(/[^A-Za-z0-9]/g), "")
      .toLowerCase();

    items
      .filter((i) => i.name === sanitized)
      .forEach((i) => {
        if (!foundItems.includes(i.displayName)) {
          setInput("");
          add.push(i.displayName);
        }
        if (add.length > foundItems.length) {
          setFoundItems(add);
        }
      });
  };

  return (
    <TextField
      autoFocus
      variant="filled"
      label={`${label} (${foundItems.length}/${items.length})`}
      value={input}
      disabled={disabled}
      onChange={(event) => compareInput(event.target.value)}
    />
  );
};
