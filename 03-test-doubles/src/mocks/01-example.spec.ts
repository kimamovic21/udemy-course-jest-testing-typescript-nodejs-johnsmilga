const user = {
  saveProfile: (name: string) => {
    return `saved-${name}`;
  },

  getRole: (userId: number) => {
    if (userId > 10) {
      return 'guest';
    }
    return 'admin';
  },

  fetchUserData: async (userId: number) => {
    return { id: userId, name: 'John' };
  },
};

describe('Spy mocking examples', () => {
  it('uses mockReturnValue for sync functions', () => {
    jest.spyOn(user, 'getRole').mockReturnValue('guest');

    const result = user.getRole(9);
    expect(result).toBe('guest');
  });

  it('uses mockResolvedValue for async functions', async () => {
    jest
      .spyOn(user, 'fetchUserData')
      .mockResolvedValue({ id: 444, name: 'Mocked User' });

    const result = await user.fetchUserData(34);
    expect(result).toEqual({ id: 444, name: 'Mocked User' });
  });

  it('uses mockImplementation for complex logic', () => {
    jest.spyOn(user, 'saveProfile').mockImplementation((name: string) => {
      if (!name) {
        throw new Error('Name is required');
      };

      return `saved-${name}`;
    });

    expect(() => user.saveProfile('')).toThrow('Name is required');
  });
});