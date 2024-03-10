import bcrypt from 'bcrypt';

const saltRounds = 10;

export const hash = async (data: string): Promise<string> => {
  return await bcrypt.hash(data, saltRounds);
};
