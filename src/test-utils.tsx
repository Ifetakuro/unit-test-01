import { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { AppProviders } from "./components/providers/app-providers";

// https://testing-library.com/docs/react-testing-library/setup
const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">,
) => render(ui, { wrapper: AppProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
