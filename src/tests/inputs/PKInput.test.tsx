import { render } from "vitest-browser-react";
import { userEvent } from "vitest/browser";
import { Type } from "../../enums";
import { PKInput } from "../../inputs";
import { getPokemonByType } from "../../utils/pokemonApi";
import type { ItemList } from "../../utils/types";

describe("PKInput tests", () => {
  const setFoundItemMock = vi.fn();

  const getScreen = async (
    disabled: boolean,
    foundItems: string[],
    items: ItemList
  ) => {
    return await render(
      <PKInput
        disabled={disabled}
        foundItems={foundItems}
        items={items}
        label="Test Input"
        setFoundItems={setFoundItemMock}
      />
    );
  };

  test("Check initial render", async () => {
    const screen = await getScreen(false, [], getPokemonByType(Type.Bug));
    expect(screen.getByText("Test Input (0/105)")).toBeVisible();
  });

  test("Check adding item to found list", async () => {
    const screen = await getScreen(false, [], getPokemonByType(Type.Bug));
    await userEvent.type(screen.getByText("Test Input (0/105)"), "weedle");

    expect(setFoundItemMock).toHaveBeenCalledWith(["Weedle"]);
  });

  test("Don't add an existing item", async () => {
    vi.resetAllMocks();
    const screen = await getScreen(
      false,
      ["Weedle"],
      getPokemonByType(Type.Bug)
    );
    await userEvent.type(screen.getByText("Test Input (1/105)"), "weedle");
    expect(setFoundItemMock).not.toHaveBeenCalled();
  });
});
