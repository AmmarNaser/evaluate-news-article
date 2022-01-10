import { handleSubmit } from "./handleSubmit";

describe('Test, the function "handleSubmit()" should exist', () => {
  test("It should return true", () => {
    expect(handleSubmit).toBeDefined();
  });
});
