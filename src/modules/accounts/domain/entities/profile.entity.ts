import { DefaultEntity } from 'src/shared/domain/entities/default.entity';

export class ProfileEntity extends DefaultEntity {
  bio?: string | null;
  avatarUrl?: string | null;
  userId: string;

  constructor(profile: Partial<ProfileEntity>) {
    super();
    Object.assign(this, profile);
  }
}
