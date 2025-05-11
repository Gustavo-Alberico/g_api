import { Injectable } from '@nestjs/common';
import { SignUpDto } from '../../presentation/dto/signup.dto';
import { TenantEntity } from '../../domain/entities/tenanty.entity';
import { Tenant as PrismaTenant } from '@prisma/client';

@Injectable()
export class TenantFactory {
  private readonly defailtWorkspaceName = "'s Workspace";

  createFromSignUpDto(signUpDto: SignUpDto): TenantEntity {
    return new TenantEntity({
      name: signUpDto.name + this.defailtWorkspaceName,
    });
  }

  createFromPrisma(prismaUser: PrismaTenant): TenantEntity {
    return new TenantEntity({
      id: prismaUser.id,
      name: prismaUser.name,
      createdAt: prismaUser.createdAt,
      updatedAt: prismaUser.updatedAt,
    });
  }
}
