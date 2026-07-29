import { describe, expect, test, vi } from "vitest";
import { render } from "vitest-browser-react";
import { PKInput } from "../../inputs";

describe("PKInput tests", () => {
  const setFoundItemMock = vi.fn();

  const getScreen = async () => {
    return await render(
      <PKInput
        disabled={false}
        foundItems={[]}
        items={[]}
        label="Test Input"
        setFoundItems={setFoundItemMock}
      />
    );
  };

  test("Check initial render", async () => {
    const screen = await getScreen();
    expect(screen.getByText("Test Input")).toBeVisible();
  });
});
