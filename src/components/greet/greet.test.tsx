import { render, screen } from "@testing-library/react";
import Greet from "./greet";

describe("Greet", () => {
  test("Greet renders correctly", () => {
    render(<Greet />);

    const text = screen.getByText(/hello/i);
    expect(text).toBeInTheDocument();
  });

  test("Greet renders with a name", () => {
    render(<Greet name="Ola" />);

    const textElement = screen.getByText("Hello Ola");
    expect(textElement).toBeInTheDocument();
  });
});
