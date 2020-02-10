import { AppRoute } from './AppRoute';
import { ControllerCollection } from './app';
import { RestController } from '../controllers/RestController';

export function restFullRoutes(controllers: ControllerCollection) {
  const routes: AppRoute[] = [];

  for (let controllerKey in controllers) {
    // TODO add property check
    const controller = controllers[controllerKey];

    if (controller instanceof RestController) {
      const restDir: string = '/' + controller.restDir;

      if (controller.hasOwnProperty('find')) {
        routes.push({
           path: restDir + "/find/:key",
           method: "get",
           action: controller.find
        });
      }

      if (controller.hasOwnProperty('list')) {
        routes.push({
          path: restDir + '/list',
          method: 'get',
          action: controller.list,
        });
      }

      if (controller.hasOwnProperty('create')) {
        routes.push({
            path: restDir + "/create",
            method: "post",
            action: controller.create
        });
      }

      if (controller.hasOwnProperty('update')) {
        routes.push({
            path: restDir + "/update",
            method: "post",
            action: controller.update
        });
      }
    }
  }

  return routes;
}
