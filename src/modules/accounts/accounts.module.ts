import { Module } from '@nestjs/common';
import { AccountsController } from './presentation/controllers/accounts.controller';
import { SignUpUseCase } from './application/usecases/signup.use-case';
import { USER_REPOSITORY } from './domain/repositories/user.repository';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { PrismaModule } from 'src/shared/prisma/prisma.module';
import { UserRepositoryImpl } from './infrastructure/database/repositories/user.repository.impl';
import { PROFILE_REPOSITORY } from './domain/repositories/profile.repository';
import { ProfileRepositoryImpl } from './infrastructure/database/repositories/profile.repository.impl';
import { TENANT_REPOSITORY } from './domain/repositories/tenant.repository';
import { TenantRepositoryImpl } from './infrastructure/database/repositories/tenant.repository.impl';
import { UserFactory } from './application/factories/user.factory';
import { TenantFactory } from './application/factories/tenant.factory';
import { ProfileFactory } from './application/factories/profile.factory';
import { EmailAlreadyExistsUseCase } from './application/usecases/email-already-exists.use-case';
import { TenantCreateUseCase } from './application/usecases/tenant-create.use-case';
import { UserCreateUseCase } from './application/usecases/user-create.use-case';
import { ProfileCreateUseCase } from './application/usecases/profile-create.use-case ';
import { CryptoModule } from 'src/shared/crypto/crypto.module';
import { HashPasswordUseCase } from './application/usecases/hash-password.use-case';
import { UserDtoMapper } from './presentation/mappers/user-dto.mapper';

@Module({
  imports: [PrismaModule, CryptoModule],
  controllers: [AccountsController],
  providers: [
    TenantFactory,
    UserFactory,
    ProfileFactory,
    EmailAlreadyExistsUseCase,
    HashPasswordUseCase,
    TenantCreateUseCase,
    UserCreateUseCase,
    ProfileCreateUseCase,
    SignUpUseCase,
    UserDtoMapper,
    {
      provide: TENANT_REPOSITORY,
      useFactory: (prismaService: PrismaService) => {
        return new TenantRepositoryImpl(prismaService);
      },
      inject: [PrismaService],
    },
    {
      provide: USER_REPOSITORY,
      useFactory: (prismaService: PrismaService) => {
        return new UserRepositoryImpl(prismaService);
      },
      inject: [PrismaService],
    },
    {
      provide: PROFILE_REPOSITORY,
      useFactory: (prismaService: PrismaService) => {
        return new ProfileRepositoryImpl(prismaService);
      },
      inject: [PrismaService],
    },
  ],
})
export class AccountsModule {}
