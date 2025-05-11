import { TenantEntity } from 'src/modules/accounts/domain/entities/tenanty.entity';
import { PrismaService } from '../../../../../shared/prisma/prisma.service';
import ITenantRepository from 'src/modules/accounts/domain/repositories/tenant.repository';
import { Prisma } from '@prisma/client';

export class TenantRepositoryImpl implements ITenantRepository {
  constructor(private prismaservice: PrismaService) {}

  createTenant(
    data: TenantEntity,
    transactionClient: Prisma.TransactionClient,
  ): Promise<TenantEntity> {
    const client = transactionClient || this.prismaservice;

    return client.tenant.create({
      data: { name: data.name },
    });
  }
}
