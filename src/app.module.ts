import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { AccountsModule } from './modules/accounts/accounts.module';
import { CryptoModule } from './shared/crypto/crypto.module';

@Module({
  imports: [AuthModule, AccountsModule, CryptoModule],
})
export class AppModule {}
