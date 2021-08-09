import { OrderItemEntity } from './order-item.entity';
import { OrderAggregate } from './order.aggregate';
import { OrderEntity, OrderStatus } from './order.entity';

describe('OrderAggregate', () => {
  it('should set entity values', () => {
    const entity = new OrderEntity({
      id: 'abc',
      status: OrderStatus.NEW,
      items: [
        new OrderItemEntity({
          id: 'def',
          name: 'item 1',
          price: '19.99'
        }),
        new OrderItemEntity({
          id: 'ghi',
          name: 'item 2',
          price: '6.99'
        })
      ]
    });

    expect(entity.id).toBe('abc');
    expect(entity.status).toBe(OrderStatus.NEW);
    expect(entity.items.length).toBe(2);

    expect(entity.items[0].id).toBe('def');
    expect(entity.items[0].name).toBe('item 1');
    expect(entity.items[0].price).toBe('19.99');

    expect(entity.items[1].id).toBe('ghi');
    expect(entity.items[1].name).toBe('item 2');
    expect(entity.items[1].price).toBe('6.99');
  });

  it('should succesfully change aggregate status', () => {
    const entity = new OrderEntity({
      id: 'abc',
      status: OrderStatus.NEW,
      items: [
        new OrderItemEntity({
          id: 'def',
          name: 'item 1',
          price: '19.99'
        }),
        new OrderItemEntity({
          id: 'ghi',
          name: 'item 2',
          price: '6.99'
        })
      ]
    });
    const originalAggregate = new OrderAggregate(entity);
    const mutatedAggregate = originalAggregate.withStatus(OrderStatus.ACCEPTED);

    expect(mutatedAggregate.getRoot().id).toBe('abc');
    expect(mutatedAggregate.getRoot().status).toBe(OrderStatus.ACCEPTED);
    expect(mutatedAggregate.getRoot().items.length).toBe(2);

    expect(mutatedAggregate.getRoot().items[0].id).toBe('def');
    expect(mutatedAggregate.getRoot().items[0].name).toBe('item 1');
    expect(mutatedAggregate.getRoot().items[0].price).toBe('19.99');

    expect(mutatedAggregate.getRoot().items[1].id).toBe('ghi');
    expect(mutatedAggregate.getRoot().items[1].name).toBe('item 2');
    expect(mutatedAggregate.getRoot().items[1].price).toBe('6.99');
  });

  it('should not modify original entity when changing aggregate', () => {
    const entity = new OrderEntity({
      id: 'abc',
      status: OrderStatus.NEW,
      items: [
        new OrderItemEntity({
          id: 'def',
          name: 'item 1',
          price: '19.99'
        }),
        new OrderItemEntity({
          id: 'ghi',
          name: 'item 2',
          price: '6.99'
        })
      ]
    });
    const aggregate = new OrderAggregate(entity);
    const mutatedAggregate = aggregate.withStatus(OrderStatus.ACCEPTED);

    expect(entity.id).toBe('abc');
    expect(entity.status).toBe(OrderStatus.NEW);
    expect(entity.items.length).toBe(2);

    expect(entity.items[0].id).toBe('def');
    expect(entity.items[0].name).toBe('item 1');
    expect(entity.items[0].price).toBe('19.99');

    expect(entity.items[1].id).toBe('ghi');
    expect(entity.items[1].name).toBe('item 2');
    expect(entity.items[1].price).toBe('6.99');
  });

  it('should not modify original aggregate when performing changes', () => {
    const entity = new OrderEntity({
      id: 'abc',
      status: OrderStatus.NEW,
      items: [
        new OrderItemEntity({
          id: 'def',
          name: 'item 1',
          price: '19.99'
        }),
        new OrderItemEntity({
          id: 'ghi',
          name: 'item 2',
          price: '6.99'
        })
      ]
    });
    const originalAggregate = new OrderAggregate(entity);
    const mutatedAggregate = originalAggregate.withStatus(OrderStatus.ACCEPTED);

    expect(originalAggregate.getRoot().id).toBe('abc');
    expect(originalAggregate.getRoot().status).toBe(OrderStatus.NEW);
    expect(originalAggregate.getRoot().items.length).toBe(2);

    expect(originalAggregate.getRoot().items[0].id).toBe('def');
    expect(originalAggregate.getRoot().items[0].name).toBe('item 1');
    expect(originalAggregate.getRoot().items[0].price).toBe('19.99');

    expect(originalAggregate.getRoot().items[1].id).toBe('ghi');
    expect(originalAggregate.getRoot().items[1].name).toBe('item 2');
    expect(originalAggregate.getRoot().items[1].price).toBe('6.99');
  });
});
