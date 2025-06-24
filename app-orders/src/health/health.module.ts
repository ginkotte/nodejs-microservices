import { Module } from '@nestjs/common';
import { HealthService } from './health.service.ts';
import { HealthController } from './health.controller.ts';

@Module({
  controllers: [HealthController],
  providers: [HealthService],
})
export class HealthModule {}
