import { createTheme } from "@mui/material/styles";
import { Type } from "../enums";

const background = "#141456";
const border = "cornflowerblue";

export const colors = {
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

export const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "PokemonGb",
          minWidth: "8rem",
          color: "black",
          padding: "1rem",
          margin: "0.25rem"
        }
      }
    },
    MuiGrid: {
      styleOverrides: {
        container: {
          width: "90vw",
          margin: "auto",
          overflowX: "hidden",
          overflowY: "auto"
        }
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          padding: "0",
          float: "right"
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontSize: "2rem"
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          marginTop: "-10px",
          fontSize: "2rem",
          color: "white",
          "&.MuiInputLabel-shrink": {
            color: border
          },
          "&.Mui-disabled": {
            color: "gray"
          }
        }
      }
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontSize: "2rem",
          color: "goldenrod",
          "&:hover, &.Mui-selected": {
            color: "yellow"
          }
        }
      }
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: "yellow"
        },
        root: {
          textAlign: "center",
          marginBottom: "1rem"
        }
      }
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontSize: "1.5rem",
          lineHeight: "1rem",
          borderColor: border,
          backgroundColor: background
        }
      }
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
          border: `2px solid ${border}`,
          borderRadius: "3px",
          maxHeight: "60vh",
          margin: "0 auto"
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          width: "20rem",
          marginBottom: "2rem",
          backgroundColor: background,
          border: `2px solid ${border}`,
          borderRadius: "5px"
        }
      }
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: "1.5rem"
        }
      }
    }
  },
  palette: {
    text: {
      primary: "#FFFFFF"
    }
  },
  typography: {
    fontFamily: "Jersey10",
    h1: {
      fontSize: "3rem",
      color: "white",
      backgroundColor: "darkblue",
      textAlign: "center"
    },
    h2: {
      fontFamily: "PokemonGb",
      fontSize: "2rem",
      padding: "1rem",
      textAlign: "center"
    },
    h3: {
      color: "white",
      fontSize: "1.5rem",
      borderRadius: "10px",
      textAlign: "center"
    }
  }
});
