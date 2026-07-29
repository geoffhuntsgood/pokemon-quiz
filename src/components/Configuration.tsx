import { Box } from "@mui/material";
import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import { Settings } from "../classes";
import { GenNumber, MoveCategory, PokemonCategory, Type } from "../enums";
import { PKButtonSet, PKTabs } from "../inputs";
import {
  getAbilitiesByGeneration,
  getUniqueAbilities
} from "../utils/abilityApi";
import {
  getMovesByCategory,
  getMovesByGeneration,
  getMovesByType
} from "../utils/moveApi";
import {
  getPokemonByCategory,
  getPokemonByGeneration,
  getPokemonByType
} from "../utils/pokemonApi";
import type { Selection, SubSelection } from "../utils/types";

export const Configuration = ({
  setSettings,
  setStart
}: {
  setSettings: Dispatch<SetStateAction<Settings>>;
  setStart: Dispatch<SetStateAction<boolean>>;
}) => {
  const [selection, setSelection] = useState<Selection>("Pokémon");
  const [subSelection, setSubSelection] = useState<SubSelection>("Generation");

  const selectByGeneration = (gen: GenNumber): Settings => {
    const label = `${gen === GenNumber.All ? "All the " : `${gen}`} ${selection}`;
    const items =
      selection === "Pokémon"
        ? getPokemonByGeneration(gen)
        : selection === "Moves"
          ? getMovesByGeneration(gen)
          : getAbilitiesByGeneration(gen);

    return { label, items };
  };

  const selectByType = (type: Type): Settings => {
    const label = `${type}-Type ${selection}`;
    const items =
      selection === "Pokémon" ? getPokemonByType(type) : getMovesByType(type);

    return { label, items };
  };

  const selectByPokeCategory = (pokeCat: PokemonCategory): Settings => {
    const label = pokeCat as string;
    const items = getPokemonByCategory(pokeCat);

    return { label, items };
  };

  const selectByMoveCategory = (moveCat: MoveCategory): Settings => {
    const label = moveCat as string;
    const items = getMovesByCategory(moveCat);

    return { label, items };
  };

  const selectUniqueAbilities = (): Settings => {
    const label = "Unique Abilities";
    const items = getUniqueAbilities();

    return { label, items };
  };

  const startGame = (settings: Settings) => {
    setSettings(settings);
    setStart(true);
  };

  useEffect(() => {
    setSubSelection("Generation");
  }, [selection]);

  return (
    <Box sx={{ maxWidth: "80vw", margin: "0 auto" }}>
      <PKTabs
        value={selection}
        setValue={setSelection}
        tabs={["Pokémon", "Moves", "Abilities"]}
      />

      {selection !== "Abilities" && (
        <PKTabs
          value={subSelection}
          setValue={setSubSelection}
          tabs={["Generation", "Type", "Category"]}
        />
      )}

      {subSelection === "Generation" && (
        <>
          <PKButtonSet
            buttonSet={
              selection === "Abilities"
                ? Object.values(GenNumber).filter(
                    (gen: GenNumber) =>
                      gen !== GenNumber.One && gen !== GenNumber.Two
                  )
                : Object.values(GenNumber)
            }
            handleClick={(gen: GenNumber) => startGame(selectByGeneration(gen))}
            addOn={
              selection === "Abilities" ? (
                <PKButtonSet
                  buttonSet={["Unique"]}
                  handleClick={() => startGame(selectUniqueAbilities())}
                />
              ) : (
                <></>
              )
            }
          />
        </>
      )}

      {subSelection === "Type" && (
        <PKButtonSet
          buttonSet={Object.values(Type).filter(
            (type: Type) => type !== Type.Varies
          )}
          handleClick={(event: Type) => startGame(selectByType(event))}
        />
      )}

      {subSelection === "Category" && (
        <>
          {selection === "Moves" && (
            <PKButtonSet
              buttonSet={Object.values(MoveCategory)}
              handleClick={(moveCat: MoveCategory) =>
                startGame(selectByMoveCategory(moveCat))
              }
            />
          )}
          {selection === "Pokémon" && (
            <PKButtonSet
              buttonSet={Object.values(PokemonCategory)}
              handleClick={(pokeCat: PokemonCategory) =>
                startGame(selectByPokeCategory(pokeCat))
              }
            />
          )}
        </>
      )}
    </Box>
  );
};
