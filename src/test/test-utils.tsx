import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import type { ReactElement } from "react";
import { ThemeProvider } from "../context/ThemeContext/ThemeProvider";

const customRender = (ui: ReactElement) => {
  return render(
    <MemoryRouter>
      <ThemeProvider>{ui}</ThemeProvider>
    </MemoryRouter>,
  );
};

export * from "@testing-library/react";
export { customRender as render };
