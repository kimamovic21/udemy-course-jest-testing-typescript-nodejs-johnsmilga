import fs from 'fs';

jest.mock('fs');

describe('File System with Mock', () => {
  it('should mock file reading', () => {
    const mockContent = 'file content';

    (fs.readFileSync as jest.Mock).mockReturnValue(mockContent);

    const content = fs.readFileSync('test.txt', 'utf-8');
    expect(content).toBe(mockContent);
  });

  it('should spy on file reading', () => {
    const mockContent = 'file content';
    const spy = jest.spyOn(fs, 'readFileSync').mockReturnValue(mockContent);

    const content = fs.readFileSync('test.txt', 'utf-8');

    expect(content).toBe(mockContent);
    expect(spy).toHaveBeenCalledWith('test.txt', 'utf-8');

    spy.mockRestore();
  });
});