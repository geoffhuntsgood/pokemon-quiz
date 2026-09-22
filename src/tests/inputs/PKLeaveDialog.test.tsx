import { render } from "vitest-browser-react";
import { PKLeaveDialog } from "../../inputs";

describe("PKLeaveDialog tests", () => {
  const setOpenMock = vi.fn();
  const handleYesActionMock = vi.fn();
  const handleNoActionMock = vi.fn();

  const getScreen = (open: boolean, yesLabel: string, noLabel: string) => {
    return render(
      <PKLeaveDialog
        title="Test Dialog"
        description="Test Description"
        open={open}
        setOpen={setOpenMock}
        handleYesAction={handleYesActionMock}
        handleNoAction={handleNoActionMock}
        yesLabel={yesLabel}
        noLabel={noLabel}
      />
    );
  };

  test("Check initial render (not open)", async () => {
    const screen = await getScreen(false, "", "");
    expect(screen.getByText("Test Dialog")).not.toBeInTheDocument();
  });

  test("Check initial render (open)", async () => {
    const screen = await getScreen(true, "Yes", "No");
    expect(screen.getByText("Test Dialog")).toBeVisible();
    expect(screen.getByText("Yes")).toBeVisible();
    expect(screen.getByText("No")).toBeVisible();
  });

  test("Check yes button action", async () => {
    const screen = await getScreen(true, "Yes", "No");
    await screen.getByText("Yes").click();
    expect(handleYesActionMock).toHaveBeenCalledOnce();
  });

  test("Check no button action", async () => {
    vi.resetAllMocks();
    const screen = await getScreen(true, "Yes", "No");
    await screen.getByText("No").click();
    expect(handleNoActionMock).toHaveBeenCalledOnce();
    expect(setOpenMock).toHaveBeenCalledOnce();
  });
});
