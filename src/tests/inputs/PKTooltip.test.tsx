import { Cancel } from "@mui/icons-material";
import { describe, expect, test, vi } from "vitest";
import { render } from "vitest-browser-react";
import { PKTooltip } from "../../inputs";

describe("PKTooltip tests", () => {
  const onClickMock = vi.fn();

  const getScreen = async () => {
    return await render(
      <PKTooltip
        helpText="Test Tooltip"
        color="blue"
        onClick={onClickMock}
        icon={<Cancel />}
      />
    );
  };

  test("Check initial render", async () => {
    const screen = await getScreen();
    await screen.getByRole("button").click();
    expect(onClickMock).toHaveBeenCalledOnce();
  });
});
