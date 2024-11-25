import { jest } from "@jest/globals";
import { screen } from "@testing-library/dom";
import { userEvent } from "@testing-library/user-event";
import { FormBuilder } from "./test-utils/FormBuilder";
import { formHandler } from "../src/formHandler";

describe("form tests", () => {
  it("should receive first name as form data when form is submitted", async () => {
    // Arrange
    const user = userEvent.setup();
    const mockHandler = jest.fn();
    const handler = formHandler(mockHandler);

    new FormBuilder()
      .withInput("First name", "firstName")
      .withSubmit("Submit")
      .withHandler(handler)
      .build();

    const input = screen.getByRole("textbox", { name: "First name" });
    const submitButton = screen.getByRole("button", { name: "Submit" });

    // Act
    await user.type(input, "John Doe");
    await user.click(submitButton);

    // Assert
    expect(mockHandler).toHaveBeenCalledWith([["First name", "John Doe"]]);
  });
});
