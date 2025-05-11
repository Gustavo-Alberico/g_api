import { DefaultEntity } from 'src/shared/domain/entities/default.entity';
import { ProfileEntity } from './profile.entity';

export class UserEntity extends DefaultEntity {
  name: string;
  email: string;
  password: string;

  profileId?: string | null;
  profile?: ProfileEntity;
  // projects?: ProjectEntity[];
  // tasks?: TaskEntity[];

  constructor(user: Partial<UserEntity>) {
    super();
    Object.assign(this, user);
  }
}
