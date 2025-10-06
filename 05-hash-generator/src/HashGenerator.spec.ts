import { HashGenerator } from './HashGenerator';

describe('HashGenerator', () => {
  const testSalt = 'testSalt123';
  const differentSalt = 'differentSalt456';
  const randomInput = 'randomInput123';

  it('should create a new instance with hash salt', () => {
    const hashGenerator = HashGenerator.createHashGenerator(testSalt);

    expect(hashGenerator).toBeDefined();
    expect(hashGenerator).toBeInstanceOf(HashGenerator);
  });

  it('should create different instances when called multiple times', () => {
    const generator1 = HashGenerator.createHashGenerator(testSalt);
    const generator2 = HashGenerator.createHashGenerator(testSalt);

    expect(generator1).not.toBe(generator2);
  });

  it('should generate URL-safe hashes', () => {
    const hashGenerator = HashGenerator.createHashGenerator(testSalt);
    const hash = hashGenerator.generateHash(randomInput);

    expect(hash).not.toMatch(/[+/=]/);
  });

  it('should generate consistent hashes for same input', () => {
    const hashGenerator = HashGenerator.createHashGenerator(testSalt);

    const firstHash = hashGenerator.generateHash(randomInput);
    const secondHash = hashGenerator.generateHash(randomInput);

    expect(firstHash).toBe(secondHash);
  });

  it('should generate different hashes for different inputs', () => {
    const hashGenerator = HashGenerator.createHashGenerator(testSalt);
    const differentInput = 'differentInput456';

    const hash1 = hashGenerator.generateHash(randomInput);
    const hash2 = hashGenerator.generateHash(differentInput);

    expect(hash1).not.toBe(hash2);
  });

  it('should generate different hashes with different secrets', () => {
    const generator1 = HashGenerator.createHashGenerator(testSalt);
    const generator2 = HashGenerator.createHashGenerator(differentSalt);

    const hash1 = generator1.generateHash(randomInput);
    const hash2 = generator2.generateHash(randomInput);

    expect(hash1).not.toBe(hash2);
  });

  it('should handle empty input', () => {
    const hashGenerator = HashGenerator.createHashGenerator(testSalt);
    const emptyInput = '';

    expect(() => hashGenerator.generateHash(emptyInput)).not.toThrow();
  });
});