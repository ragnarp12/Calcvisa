/**
 * Decorator that waits
 * @param delay amount of milliseconds to wait
 */
export function debounce(delay: number = 300): MethodDecorator {
  // tslint:disable-next-line:only-arrow-functions
  return function(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const weakMap = new WeakMap();
    const original = descriptor.value;

    descriptor.value = function(...args) {
      let debounced = weakMap.get(this);
      if (!debounced) {
        debounced = setTimeout(() => original.apply(this, args), delay);
        weakMap.set(this, debounced);
      } else {
        clearTimeout(debounced);
      }
    };

    return descriptor;
  };
}
