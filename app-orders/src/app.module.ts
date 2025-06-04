import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { OrdersModule } from './orders/orders.module';
import { HealthModule } from './health/health.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule, OrdersModule, HealthModule],
})
export class AppModule {}
