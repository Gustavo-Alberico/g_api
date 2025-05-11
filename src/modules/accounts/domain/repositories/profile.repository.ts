import { ProfileEntity } from '../entities/profile.entity';

export default interface IProfileRepository {
  createProfile(data: ProfileEntity, tx: any): Promise<ProfileEntity>;
}

export const PROFILE_REPOSITORY = Symbol('IProfileRepository');
