import { VoidFn } from '@customTypes/general-types';

export interface CounterModel {
  increment: VoidFn;
  decrement: VoidFn;
  reset: VoidFn;
  counter: number;
}
