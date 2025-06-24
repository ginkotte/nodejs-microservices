/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import amqp from 'amqplib';

if (!process.env.BROKER_URL) {
  throw new Error('BROKER_URL must be defined!');
}

export const broker: amqp.Connection = await amqp.connect(
  process.env.BROKER_URL,
);
