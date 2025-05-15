import { UserEntity } from '../entities/user.entity';

export default interface IUserRepository {
  createUser(data: UserEntity, tx: any): Promise<UserEntity>;
  getUserByEmail(email: string, tx: any): Promise<UserEntity | null>;
}

export const USER_REPOSITORY = Symbol('IUserRepository');
