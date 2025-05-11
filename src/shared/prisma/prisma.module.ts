import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { TRANSACTION_MANAGER } from 'src/shared/application/ports/transaction.manager';
import { TransactionServiceImpl } from './transaction.manager.impl';

@Module({
  providers: [
    PrismaService,
    {
      provide: TRANSACTION_MANAGER,
      useFactory: (prismaService: PrismaService) => {
        return new TransactionServiceImpl(prismaService);
      },
      inject: [PrismaService],
    },
  ],
  exports: [PrismaService, TRANSACTION_MANAGER],
})
export class PrismaModule {}
