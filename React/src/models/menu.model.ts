import React from 'react';

export interface MenuModel {
  desktop?: boolean;
  routeAction?: React.Dispatch<React.SetStateAction<boolean>>;
}
