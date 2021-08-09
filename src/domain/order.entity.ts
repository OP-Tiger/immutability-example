import { Entity } from '../common/entity';
import { NonFunctionProperties } from '../utils';
import { OrderItemEntity } from './order-item.entity';

export enum OrderStatus {
  NEW = 'NEW',
  ACCEPTED = 'ACCEPTED',
  FINISHED = 'FINISHED'
}

export class OrderEntity extends Entity<OrderEntity> {
  protected construct(input: NonFunctionProperties<OrderEntity>): OrderEntity {
    return new OrderEntity(input);
  }

  id!: string;
  status!: OrderStatus;
  items!: OrderItemEntity[];
  note?: string;
}