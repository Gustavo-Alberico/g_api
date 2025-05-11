import { TenantEntity } from '../entities/tenanty.entity';

export default interface ITenantRepository {
  createTenant(data: TenantEntity, tx: any): Promise<TenantEntity>;
}

export const TENANT_REPOSITORY = Symbol('ITenantRepository');
