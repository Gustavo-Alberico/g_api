import { Inject, Injectable } from '@nestjs/common';
import IUserRepository, {
  USER_REPOSITORY,
} from '../../domain/repositories/user.repository';
import { UserEntity } from '../../domain/entities/user.entity';

@Injectable()
export class UserCreateUseCase {
  constructor(
    @Inject(USER_REPOSITORY) private userRepository: IUserRepository,
  ) {}

  execute(user: UserEntity, transactionClient: any): Promise<UserEntity> {
    return this.userRepository.createUser(user, transactionClient);
  }
}
