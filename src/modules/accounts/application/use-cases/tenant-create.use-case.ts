import { Inject, Injectable } from '@nestjs/common';
import { TenantEntity } from '../../domain/entities/tenanty.entity';
import ITenantRepository, {
  TENANT_REPOSITORY,
} from '../../domain/repositories/tenant.repository';
import { SignUpDto } from '../../presentation/dto/signup.dto';
import { TenantFactory } from '../factories/tenant.factory';

@Injectable()
export class TenantCreateUseCase {
  constructor(
    @Inject(TENANT_REPOSITORY)
    private tenantRepository: ITenantRepository,
    private tenantFactory: TenantFactory,
  ) {}

  execute(data: SignUpDto, transactionClient: any): Promise<TenantEntity> {
    const tenant = this.tenantFactory.createFromSignUpDto(data);
    return this.tenantRepository.createTenant(tenant, transactionClient);
  }
}
