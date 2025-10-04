const user = {
  getRole: (userId: number) => {
    if (userId > 10) {
      return 'guest';
    }
    return 'admin';
  },
};

describe('User role tests', () => {
  let roleSpy: jest.SpyInstance;

  beforeEach(() => {
    roleSpy = jest.spyOn(user, 'getRole');
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should return mocked guest role', () => {
    roleSpy.mockReturnValue('guest');

    const result = user.getRole(2);

    expect(result).toBe('guest');
  });

  it('should return original implementation', () => {
    const result = user.getRole(2);

    expect(result).toBe('admin');

    expect(roleSpy).toHaveBeenCalledTimes(1);
  });
});