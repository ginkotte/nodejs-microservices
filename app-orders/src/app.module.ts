import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module.ts';
import { OrdersModule } from './orders/orders.module.ts';
import { HealthModule } from './health/health.module.ts';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule, OrdersModule, HealthModule],
})
export class AppModule {}
