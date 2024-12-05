// Your tests here
import { isPalindrome } from "../utils";

describe("isPalindrome", () => {
  it("returns true for palindromes", () => {
    expect(isPalindrome("racecar")).toBe(true);
  });

  it("returns false for non-palindromes", () => {
    expect(isPalindrome("car")).toBe(false);
  });

  it("handles uppercase and lowercase input", () => {
    expect(isPalindrome("RaceCar")).toBe(true);
  });

  it("returns false for an empty string", () => {
    expect(isPalindrome("")).toBe(false);
  });

  it("throws an error for non-alphabetic characters", () => {
    expect(() => isPalindrome("racecar123")).toThrow();
  });

  it("throws an error for non-string input", () => {
    expect(() => isPalindrome(123)).toThrow();
  });
});
