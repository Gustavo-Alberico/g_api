import { DefaultEntity } from 'src/shared/domain/entities/default.entity';

export class TenantEntity {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(tenant: Partial<TenantEntity>) {
    Object.assign(this, tenant);
  }
}
