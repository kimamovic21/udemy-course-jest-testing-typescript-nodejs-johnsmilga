import {
  add,
  subtract,
  isEven,
  createUser,
  createJwtToken,
  calculateAverage,
} from '../utils';

describe('Utility Functions', () => {
  it('adds two positive numbers correctly', () => {
    expect(add(2, 3)).toBe(5);
  });

  it('subtracts two numbers correctly', () => {
    expect(subtract(5, 3)).toBe(2);
  });

  it('returns true for even numbers', () => {
    expect(isEven(2)).toBe(true);
    expect(isEven(0)).toBe(true);
  });

  it('returns false for odd numbers', () => {
    expect(isEven(1)).toBe(false);
    expect(isEven(99)).toBe(false);
  });

  it('creates user object with correct properties', () => {
    const user = createUser('John Doe', 30);
    // expect(user).toBe({ name: 'John Doe', age: 30 });
    expect(user).toEqual({ name: 'John Doe', age: 30 });
    expect(user).not.toEqual({ name: 'Susan Doe', age: 25 });
  });

  it('should create a jwt token', async () => {
    const token = await createJwtToken();
    expect(token).toBe('jwt_token');
  });

  it('calculates average correctly for non-empty arrays', () => {
    expect(calculateAverage([2, 4, 6, 8])).toBe(5);
    expect(calculateAverage([6])).toBe(6);
  });

  it('calculates average correctly for empty arrays', () => {
    expect(calculateAverage([])).toBe(0);
  });
});