import { sum } from '../sum';

describe('sum function', () => {
  it('should add two numbers correctly', () => {
    expect(sum(1, 2)).toBe(3);
  });
  it.only('should handle negative numbers', () => {
    expect(sum(-1, -2)).toBe(-3);
  });
}); 