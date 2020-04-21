import { AppRoute } from './AppRoute';
import { Controller } from '../controllers/Controller';
import { restFullRoutes } from './restFullRoutes';

import {
  ImageController,
} from '../controllers';

export interface ControllerCollection {
  [key: string]: Controller
}

const controllers = {
  image: new ImageController,
};

/**
 *
 * All application routes.
 */
export const appRoutes: AppRoute[] = [
  ...restFullRoutes(controllers),
  ...[
    {
      path: '/',
      method: 'get',
      action: controllers.image.helloWorld,
    }
  ],
];
