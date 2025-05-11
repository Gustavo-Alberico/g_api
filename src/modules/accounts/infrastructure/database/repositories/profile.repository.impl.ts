import { ProfileEntity } from 'src/modules/accounts/domain/entities/profile.entity';
import IProfileRepository from 'src/modules/accounts/domain/repositories/profile.repository';
import { PrismaService } from '../../../../../shared/prisma/prisma.service';
import { Prisma } from '@prisma/client';

export class ProfileRepositoryImpl implements IProfileRepository {
  constructor(private prismaService: PrismaService) {}

  createProfile(
    data: ProfileEntity,
    tx: Prisma.TransactionClient,
  ): Promise<ProfileEntity> {
    const client = tx || this.prismaService;
    return client.profile.create({
      data: { tenantId: data.tenantId, userId: data.userId },
    });
  }
}
