import { Entity } from '../common/entity';
import { NonFunctionProperties } from '../utils';

export class OrderItemEntity extends Entity<OrderItemEntity> {
  protected construct(input: NonFunctionProperties<OrderItemEntity>): OrderItemEntity {
    return new OrderItemEntity(input);
  }

  id!: string;
  name!: string;
  price!: string;
}