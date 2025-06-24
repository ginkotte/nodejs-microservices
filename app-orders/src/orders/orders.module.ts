import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service.ts';
import { OrdersController } from './orders.controller.ts';
import { DatabaseModule } from 'src/database/database.module.ts';

@Module({
  imports: [DatabaseModule],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}
