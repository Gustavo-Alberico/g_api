import * as bcrypt from 'bcrypt';
import Encrypter from './encrypter';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BcryptEncrypter implements Encrypter {
  private readonly saltRounds = 12;

  async hash(plain: string): Promise<string> {
    return await bcrypt.hash(plain, this.saltRounds);
  }

  async compare(plain: string, hashed: string): Promise<boolean> {
    return await bcrypt.compare(plain, hashed);
  }
}
