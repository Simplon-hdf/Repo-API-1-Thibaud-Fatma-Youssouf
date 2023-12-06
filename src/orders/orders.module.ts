import { Module } from '@nestjs/common';
import { OrderService } from './orders.service';
import { OrderController } from './orders.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [OrderController],
  providers: [OrderService, PrismaService],
})
export class OrdersModule {}
