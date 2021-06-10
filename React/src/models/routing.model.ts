import { StringVoidFn } from '@customTypes/general-types';

export interface RoutingModel {
  Home: boolean;
  Skills: boolean;
  Experience: boolean;
  navigate: StringVoidFn;
}
