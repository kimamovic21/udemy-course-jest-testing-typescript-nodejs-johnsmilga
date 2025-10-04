import { user } from './user';

// jest.mock('./user');
jest.mock('./user', () => ({
  user: {
    getRole: jest.fn().mockReturnValue('guest'),
    getName: jest.fn().mockReturnValue('john'),
    getEmail: (): string => 'john@example.com',
  },
}));
// console.log(user);

describe('User mocking approaches', () => {
  // it('mocks single method using jest.fn()', () => {
  //   user.getRole = jest.fn().mockReturnValue('guest');

  //   expect(user.getRole()).toBe('guest');
  //   expect(user.getName()).toBe('John');
  //   expect(user.getEmail()).toBe('john@example.com');
  // });

  it('mocks single method using jest.fn()', () => {
    (user.getRole as jest.Mock).mockReturnValue('guest');

    expect(user.getRole()).toBe('guest');
  });

  it('shows mock gotcha', () => {
    expect(user.getRole()).toBe('guest');
    expect(user.getName()).toBe('john');
    expect(user.getEmail()).toBe('john@example.com');
  });
});