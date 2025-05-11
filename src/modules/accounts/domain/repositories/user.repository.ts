import { UserEntity } from '../entities/user.entity';

export default interface IUserRepository {
  createUser(data: UserEntity, tx: any): Promise<UserEntity>;
  emailAlreadyExists(email: string, tx: any): Promise<boolean>;
}

export const USER_REPOSITORY = Symbol('IUserRepository');
