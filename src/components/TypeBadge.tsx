import { Typography } from "@mui/material";
import { Type } from "../enums";
import { colors } from "../utils/theme";

export const TypeBadge = ({ type, type2 }: { type: Type; type2?: Type }) => {
  const styles = {
    backgroundImage: `linear-gradient(to right, ${colors[type]}, ${type2 ? colors[type2] : colors[type]})`
  };

  const typeUp = type.toUpperCase();
  const type2Up = type2 ? type2.toUpperCase() : null;

  return (
    <Typography variant="h3" sx={styles}>
      {type2Up ? `${typeUp.slice(0, 3)}/${type2Up.slice(0, 3)}` : typeUp}
    </Typography>
  );
};
