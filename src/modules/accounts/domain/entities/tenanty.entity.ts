export class TenantEntity {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(tenant: Partial<TenantEntity>) {
    Object.assign(this, tenant);
  }
}
