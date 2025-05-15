import { Inject, Injectable } from '@nestjs/common';
import IProfileRepository, {
  PROFILE_REPOSITORY,
} from '../../domain/repositories/profile.repository';
import { ProfileEntity } from '../../domain/entities/profile.entity';

@Injectable()
export class ProfileCreateUseCase {
  constructor(
    @Inject(PROFILE_REPOSITORY)
    private profileRepository: IProfileRepository,
  ) {}

  execute(user: ProfileEntity, tx: any): Promise<ProfileEntity> {
    return this.profileRepository.createProfile(user, tx);
  }
}
