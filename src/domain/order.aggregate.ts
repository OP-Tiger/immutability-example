import { Aggregate } from '../common/aggregate';
import { OrderEntity, OrderStatus } from './order.entity';

export class OrderAggregate extends Aggregate<OrderEntity> {
  public withStatus(status: OrderStatus): OrderAggregate {
    return new OrderAggregate(
      this.aggregateRoot.with({ status })
    );
  }
}