import { render, screen } from "@testing-library/react";
import { Counter2 } from "./counter2";
import user from "@testing-library/user-event";

describe("Counter2", () => {
  test("renders correctly", () => {
    render(<Counter2 count={0} />);
    const textElement = screen.getByText("Counter Two");
    expect(textElement).toBeInTheDocument();
  });

  test("handlers are called", async () => {
    user.setup();
    const incrementHandler = jest.fn();
    const decrementHandler = jest.fn();

    render(
      <Counter2
        count={0}
        handleIncrement={incrementHandler}
        handleDecrement={decrementHandler}
      />,
    );

    const incrementButton = screen.getByRole("button", { name: "Increment" });
    const decrementButton = screen.getByRole("button", { name: "Decrement" });

    await user.click(incrementButton);
    await user.click(decrementButton);

    expect(incrementHandler).toHaveBeenCalledTimes(1);
    expect(decrementHandler).toHaveBeenCalledTimes(1);
  });
});
