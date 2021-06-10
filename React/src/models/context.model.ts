import { UpdateContextFn } from '@customTypes/general-types';
import React from 'react';

export interface AppContextModel extends ReferenceMenuModel {
  activeRoute?: string;
  updateRoute?: UpdateContextFn;
  updateRef?: React.Dispatch<ActionModel<React.MutableRefObject<null>>>;
}

export interface LayoutContextModel {
  homeRef?: React.MutableRefObject<null | Element>;
  skillsRef?: React.MutableRefObject<null | Element>;
  experienceRef?: React.MutableRefObject<null | Element>;
  updateRef?: React.Dispatch<ActionModel<React.MutableRefObject<null>>>;
}

export interface ReferenceMenuModel {
  homeRef?: React.MutableRefObject<null | Element>;
  skillsRef?: React.MutableRefObject<null | Element>;
  experienceRef?: React.MutableRefObject<null | Element>;
}

export interface ActionModel<T> {
  type: string | number;
  payload: T;
}
