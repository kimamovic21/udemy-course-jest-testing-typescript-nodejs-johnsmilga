import Calculator from '../Calculator';

describe('Calculator', () => {
  let sut: Calculator;

  beforeEach(() => {
    sut = new Calculator();
  });

  it('should start with value 0', () => {
    expect(sut.value).toBe(0);
  });

  it('should add a number to the current value', () => {
    expect(sut.add(5)).toBe(5);
  });

  it('should subtract a number from the current value', () => {
    sut.add(10);
    expect(sut.subtract(3)).toBe(7);
  });

  it('should return false when value is not positive', () => {
    expect(sut.isPositive()).not.toBeTruthy();
  });

  it('should return true when value is positive', () => {
    sut.add(1);
    expect(sut.isPositive()).toBeTruthy();
  });
});