import Calculator from "../src/calculator";

it("Should sum two numbers", () => {
  const calc = new Calculator();

  expect(calc.add(1, 2)).toBe(3);
});
