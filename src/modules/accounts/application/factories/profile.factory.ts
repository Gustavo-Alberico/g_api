import { Injectable } from '@nestjs/common';
import { Profile as PrismaProfile } from '@prisma/client';
import { ProfileEntity } from '../../domain/entities/profile.entity';

@Injectable()
export class ProfileFactory {
  create(tenantId: string, userId: string): ProfileEntity {
    return new ProfileEntity({
      tenantId,
      userId,
    });
  }

  createFromPrisma(prismaProfile: PrismaProfile): ProfileEntity {
    return new ProfileEntity({
      id: prismaProfile.id,
      avatarUrl: prismaProfile.avatarUrl,
      bio: prismaProfile.bio,
      userId: prismaProfile.userId,
      tenantId: prismaProfile.tenantId,
      createdAt: prismaProfile.createdAt,
      updatedAt: prismaProfile.updatedAt,
    });
  }
}
