import { DeepReadonly } from 'ts-essentials';
import { Entity } from './entity';

export class Aggregate<E extends Entity<E>> {
  constructor(aggregateRoot: E | DeepReadonly<E>) {
    this.aggregateRoot = aggregateRoot as DeepReadonly<E>;
  }

  protected aggregateRoot: DeepReadonly<E>;

  public getRoot(): DeepReadonly<E> {
    return this.aggregateRoot;
  }
}