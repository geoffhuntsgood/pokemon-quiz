import { describe, expect, test, vi } from "vitest";
import { render } from "vitest-browser-react";
import { userEvent } from "vitest/browser";
import { PKSaveDialog } from "../../inputs";

describe("PKSaveDialog tests", () => {
  const setOpenMock = vi.fn();
  const handleActionMock = vi.fn();

  const getScreen = (open: boolean) => {
    return render(
      <PKSaveDialog
        title="Test Dialog"
        label="Test Description"
        open={open}
        setOpen={setOpenMock}
        handleAction={handleActionMock}
      />
    );
  };

  test("Check initial render (not open)", async () => {
    const screen = await getScreen(false);
    expect(screen.getByText("Test Dialog")).not.toBeInTheDocument();
  });

  test("Check initial render (open)", async () => {
    const screen = await getScreen(true);
    expect(screen.getByText("Test Dialog")).toBeVisible();
  });

  test("Check save button action", async () => {
    const screen = await getScreen(true);
    await userEvent.type(screen.getByText("Test Description"), "12345");
    await screen.getByText("SAVE").click();
    expect(handleActionMock).toHaveBeenCalledWith("12345");
    expect(setOpenMock).toHaveBeenCalledWith(false);
  });
});
