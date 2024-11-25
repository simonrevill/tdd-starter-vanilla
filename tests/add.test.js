import { add } from "../src/add";

describe("add module tests", () => {
  it("should add 2 and 2 and return 4", () => {
    // Arrange
    const result = add(2, 2);

    // Assert
    expect(result).toBe(4);
  });
});
