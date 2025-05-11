import { Injectable } from '@nestjs/common';
import { UserEntity } from '../../domain/entities/user.entity';
import { SignUpDto } from '../../presentation/dto/signup.dto';
import { User as PrismaUser } from '@prisma/client';

@Injectable()
export class UserFactory {
  createFromSignUpDto(signUpDto: SignUpDto): UserEntity {
    return new UserEntity({
      name: signUpDto.name,
      email: signUpDto.email,
      password: signUpDto.password,
    });
  }

  createFromPrisma(prismaUser: PrismaUser): UserEntity {
    return new UserEntity({
      id: prismaUser.id,
      name: prismaUser.name,
      email: prismaUser.email,
      tenantId: prismaUser.tenantId,
      password: prismaUser.password,
      createdAt: prismaUser.createdAt,
      updatedAt: prismaUser.updatedAt,
    });
  }
}
