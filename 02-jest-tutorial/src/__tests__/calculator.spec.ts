import Calculator from '../Calculator';

describe('Calculator', () => {
  it('should start with value 0', () => {
    const calculator = new Calculator();
    expect(calculator.value).toBe(0);
  });

  it('should add a number to the current value', () => {
    const calculator = new Calculator();
    expect(calculator.add(5)).toBe(5);
  });

  it('should subtract a number from the current value', () => {
    const calculator = new Calculator();
    calculator.add(10);
    expect(calculator.subtract(3)).toBe(7);
  });

  it('should return false when value is not positive', () => {
    const calculator = new Calculator();
    expect(calculator.isPositive()).not.toBeTruthy();
  });

  it('should return true when value is positive', () => {
    const calculator = new Calculator();
    calculator.add(1);
    expect(calculator.isPositive()).toBeTruthy();
  });
});