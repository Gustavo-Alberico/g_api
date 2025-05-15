import { Inject, Injectable } from '@nestjs/common';
import IUserRepository, {
  USER_REPOSITORY,
} from '../../domain/repositories/user.repository';
import { UserEntity } from '../../domain/entities/user.entity';

@Injectable()
export class GetUserByEmailUseCase {
  constructor(
    @Inject(USER_REPOSITORY) private userRepository: IUserRepository,
  ) {}

  execute(email: string, transactionClient: any): Promise<UserEntity | null> {
    return this.userRepository.getUserByEmail(email, transactionClient);
  }
}
