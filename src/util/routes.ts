import { Express } from 'express';
import { appRoutes } from '../routes/app';
import { AppRoute } from '../routes/AppRoute';

/**
 * Registers the routes.
 *
 * @param app
 */
export function registerRoutes(app: Express) {
  appRoutes.forEach((route: AppRoute) => {
    // @ts-ignore => Express error for using method string as index
    app[route.method](route.path, (request: Request, response: Response, next: Function) => {
      if (route.action) {
        return route.action(request, response);

          // TODO: error handling
          // .then(() => next)
          // .catch((err: any) => next(err));
      }
    });
  });
}
