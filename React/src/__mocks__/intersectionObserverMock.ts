function setupIntersectionObserverMock({
  root = null,
  rootMargin = '',
  thresholds = [],
  disconnect = () => null,
  observe = () => null,
  takeRecords = () => [],
  unobserve = () => null,
} = {}): void {
  class MockIntersectionObserver {
    public root: any;

    public rootMargin: any;

    public thresholds: any;

    public disconnect: any;

    public observe: any;

    public takeRecords: any;

    public unobserve: any;

    constructor() {
      this.root = root;
      this.rootMargin = rootMargin;
      this.thresholds = thresholds;
      this.disconnect = disconnect;
      this.observe = observe;
      this.takeRecords = takeRecords;
      this.unobserve = unobserve;
    }
  }

  Object.defineProperty(window, 'IntersectionObserver', {
    writable: true,
    configurable: true,
    value: MockIntersectionObserver,
  });
}

export default setupIntersectionObserverMock;
