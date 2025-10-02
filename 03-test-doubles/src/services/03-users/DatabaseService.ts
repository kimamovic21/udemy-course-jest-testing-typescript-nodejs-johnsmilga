const usersUrl = 'https://www.course-api.com/jest-course/users';

export type User = {
  id: number;
  name: string;
  email: string;
  role: string;
};

export class DatabaseService {
  static async createUser(name: string, email: string): Promise<User> {
    const response = await fetch(usersUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email }),
    });

    if (!response.ok) {
      throw new Error(`Failed to create user: ${response.statusText}`);
    };

    const data = (await response.json()) as User;
    console.log('Database API Response : ', data);
    return data;
  };
};
