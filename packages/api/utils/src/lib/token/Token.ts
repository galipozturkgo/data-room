import { createHash, randomBytes } from 'crypto';

export class Token {
  static hash() {
    const token = randomBytes(32).toString('hex');
    const hashedToken = createHash('sha256').update(token).digest('hex');
    return { token, hashedToken };
  }

  static compare(token: string, hashedToken: string) {
    const newHashedToken = createHash('sha256').update(token).digest('hex');
    return newHashedToken === hashedToken;
  }
}
