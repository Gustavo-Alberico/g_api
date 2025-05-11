import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import ITransactionManager from 'src/shared/application/ports/transaction.manager';

@Injectable()
export class TransactionServiceImpl implements ITransactionManager {
  constructor(private readonly prisma: PrismaService) {}

  async execute<T>(fn: (tx: any) => Promise<T>): Promise<T> {
    return this.prisma.$transaction(fn);
  }
}
