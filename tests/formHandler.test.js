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

    new FormBuilder()
      .withInput("First name", "firstName")
      .withSubmit("Submit")
      .withHandler(formHandler(mockHandler))
      .build();

    // Act
    await user.type(
      screen.getByRole("textbox", { name: "First name" }),
      "John Doe"
    );
    await user.click(screen.getByRole("button", { name: "Submit" }));

    // Assert
    expect(mockHandler).toHaveBeenCalledWith([["First name", "John Doe"]]);
  });
});
