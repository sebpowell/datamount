import * as bcrypt from "bcryptjs";

const SALT_ROUNDS = 10;

class BcryptService {
  public async createPasswordHash(password: string): Promise<string> {
    return bcrypt.hash(password, SALT_ROUNDS);
  }

  public isPasswordMatchingHash(
    password: string,
    passwordHash: string,
  ): Promise<boolean> {
    return bcrypt.compare(password, passwordHash);
  }
}

const bcryptService = new BcryptService();

export { BcryptService, bcryptService };
