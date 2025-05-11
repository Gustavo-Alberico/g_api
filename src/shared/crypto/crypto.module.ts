import { Module } from '@nestjs/common';
import { ENCRYPTER } from './encrypter';
import { BcryptEncrypter } from './bcrypt-encrypter';

@Module({
  providers: [
    {
      provide: ENCRYPTER,
      useFactory: () => new BcryptEncrypter(),
    },
  ],
  exports: [ENCRYPTER],
})
export class CryptoModule {}
