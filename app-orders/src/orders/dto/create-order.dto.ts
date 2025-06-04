/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateOrderDto {
  @IsNotEmpty()
  @IsInt()
  amount: number;
}
