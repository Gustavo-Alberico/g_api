import { Inject, Injectable } from '@nestjs/common';
import IUserRepository, {
  USER_REPOSITORY,
} from '../../domain/repositories/user.repository';

@Injectable()
export class EmailAlreadyExistsUseCase {
  constructor(
    @Inject(USER_REPOSITORY) private userRepository: IUserRepository,
  ) {}

  execute(email: string, transactionClient: any): Promise<boolean> {
    return this.userRepository.emailAlreadyExists(email, transactionClient);
  }
}
