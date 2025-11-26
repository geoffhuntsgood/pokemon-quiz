import { Type } from "../enums";

export const TypeBadge = ({ type, type2 }: { type: Type; type2?: Type }) => {
  const colors = {
    [Type.Bug]: "#A8B81F",
    [Type.Dark]: "#705848",
    [Type.Dragon]: "#7038F8",
    [Type.Electric]: "#F9D080",
    [Type.Fairy]: "#EE99AC",
    [Type.Fighting]: "#C03028",
    [Type.Fire]: "#F07F30",
    [Type.Flying]: "#A890F0",
    [Type.Ghost]: "#705998",
    [Type.Grass]: "#78C850",
    [Type.Ground]: "#E0C068",
    [Type.Ice]: "#98D8D8",
    [Type.Normal]: "#A8A878",
    [Type.Poison]: "#A040A1",
    [Type.Psychic]: "#F85988",
    [Type.Rock]: "#B8A038",
    [Type.Steel]: "#B9B7D0",
    [Type.Varies]: "#000000",
    [Type.Water]: "#6891F0"
  };

  const styles = {
    badge: {
      color: "white",
      borderRadius: "10px",
      fontFamily: "Jersey10",
      fontSize: "1.2rem",
      padding: "2px 8px",
      margin: "0 2px"
    },
    primary: {
      backgroundColor: colors[type]
    },
    secondary: {
      backgroundColor: type2 ? colors[type2] : "white"
    }
  };

  return (
    <>
      <span style={{ ...styles.badge, ...styles.primary }}>
        {type.slice(0, 3)}
      </span>
      {type2 && (
        <span style={{ ...styles.badge, ...styles.secondary }}>
          {type2.slice(0, 3)}
        </span>
      )}
    </>
  );
};
