import { checkUrl } from "./checkUrl";

describe('Test, the function "handleSubmit()" should exist', () => {
  test("It should return true", () => {
    expect(checkUrl).toBeDefined();
  });
});
