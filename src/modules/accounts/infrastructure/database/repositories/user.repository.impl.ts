import { Injectable } from '@nestjs/common';
import IUserRepository from 'src/modules/accounts/domain/repositories/user.repository';
import { UserEntity } from 'src/modules/accounts/domain/entities/user.entity';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class UserRepositoryImpl implements IUserRepository {
  constructor(private prismaService: PrismaService) {}
  createUser(
    userEntity: UserEntity,
    tx: Prisma.TransactionClient,
  ): Promise<UserEntity> {
    const client = tx || PrismaService;
    return client.user.create({
      data: {
        name: userEntity.name,
        password: userEntity.password,
        email: userEntity.email,
        tenantId: userEntity.tenantId,
      },
    });
  }

  async getUserByEmail(
    email: string,
    tx: Prisma.TransactionClient,
  ): Promise<UserEntity | null> {
    const client = tx || this.prismaService;

    const user = await client.user.findUnique({
      where: { email },
    });

    return user;
  }
}
