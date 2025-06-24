import { Inject, Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto.ts';
import { PrismaService } from 'src/database/prisma.service.ts';

@Injectable()
export class OrdersService {
  @Inject()
  private readonly prisma: PrismaService;

  async create(createOrderDto: CreateOrderDto) {
    return await this.prisma.order.create({
      data: {
        ...createOrderDto,
        status: 'PENDING',
        customerId: '88ceb3b1-a4f4-415a-b223-b0cbcba1b048',
      },
    });
  }
}
