/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { broker } from '../broker.ts';

export const orders = await broker.createChannel();

await orders.assertQueue('orders');
