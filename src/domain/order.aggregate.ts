import { Aggregate } from '../common/aggregate';
import { OrderEntity } from './order.entity';

export class OrderAggregate extends Aggregate<OrderEntity> {
  public withStatus(status: any): OrderAggregate {
    return new OrderAggregate(
      this.aggregateRoot.with('status', status)
    );
  }
}