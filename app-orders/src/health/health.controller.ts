import { Controller, Get } from '@nestjs/common';
import { HealthService } from './health.service.ts';

@Controller('health')
export class HealthController {
  constructor(private readonly healthService: HealthService) {}
  @Get()
  findAll() {
    return this.healthService.checkHealth();
  }
}
