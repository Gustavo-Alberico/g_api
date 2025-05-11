import { Inject, Injectable } from '@nestjs/common';
import { UserEntity } from '../../domain/entities/user.entity';
import { SignUpDto } from '../../presentation/dto/signup.dto';
import ITransactionManager, {
  TRANSACTION_MANAGER,
} from 'src/shared/application/ports/transaction.manager';
import { EmailAlreadyExistsUseCase } from './email-already-exists.use-case';
import { TenantCreateUseCase } from './tenant-create.use-case';
import { UserFactory } from '../factories/user.factory';
import { UserCreateUseCase } from './user-create.use-case';
import { ProfileCreateUseCase } from './profile-create.use-case ';
import { ProfileFactory } from '../factories/profile.factory';
import { EmailAlreadyExistsError } from '../../domain/errors/email-already-exists.error';
import { HashPasswordUseCase } from './hash-password.use-case';

@Injectable()
export class SignUpUseCase {
  constructor(
    private createTenantUseCase: TenantCreateUseCase,
    private userCreateUseCase: UserCreateUseCase,
    private profileCreateUseCase: ProfileCreateUseCase,
    private emailAlreadyExistsUseCase: EmailAlreadyExistsUseCase,
    private hashPasswordUseCase: HashPasswordUseCase,
    private userFactory: UserFactory,
    private profileFactory: ProfileFactory,
    @Inject(TRANSACTION_MANAGER)
    private transactionService: ITransactionManager,
  ) {}

  execute(signUpData: SignUpDto): Promise<UserEntity> {
    return this.transactionService.execute(async (tx) => {
      const exists = await this.emailAlreadyExistsUseCase.execute(
        signUpData.email,
        tx,
      );

      if (exists) {
        throw new EmailAlreadyExistsError('Email already exists');
      }

      const tenant = await this.createTenantUseCase.execute(signUpData, tx);

      const userEntity = this.userFactory.createFromSignUpDto(signUpData);
      userEntity.tenantId = tenant.id;

      const hashedPassword = await this.hashPasswordUseCase.execute(
        userEntity.password,
      );
      userEntity.password = hashedPassword;

      const user = await this.userCreateUseCase.execute(userEntity, tx);

      const profile = this.profileFactory.create(tenant.id, user.id);
      await this.profileCreateUseCase.execute(profile, tx);
      return user;
    });
  }
}
