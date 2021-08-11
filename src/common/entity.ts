import { NonFunctionProperties } from '../utils';

export abstract class Entity<E extends Entity<E>> {
  public constructor(input: NonFunctionProperties<E>) {
    if (input) {
      type PropertyValue = this[Extract<keyof this, string>];
      for (const property of Object.getOwnPropertyNames(input)) {
        this[property as keyof this] = input[property as keyof NonFunctionProperties<E>] as unknown as PropertyValue;
      }
    }
  }

  protected abstract construct(input: NonFunctionProperties<Entity<E>>): E;

  public with(input: Partial<this>): E {
    return this.construct({
      ...this,
      ...input
    });
  }
}