import { Inject, Injectable } from '@nestjs/common';
import Encrypter, { ENCRYPTER } from 'src/shared/crypto/encrypter';

@Injectable()
export class HashPasswordUseCase {
  constructor(@Inject(ENCRYPTER) private encrypter: Encrypter) {}

  execute(password: string): Promise<string> {
    return this.encrypter.hash(password);
  }
}
