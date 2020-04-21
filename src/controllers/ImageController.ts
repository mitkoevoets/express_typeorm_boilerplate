import { RestController } from './RestController';
import { Request, Response } from 'express';

export class ImageController extends RestController {
  public entity: string = 'ImageEntity';
  public restDir: string = 'image';

  /**
   *
   * @param request
   * @param response
   */
  public helloWorld = async (request: Request, response: Response) => {
    response.send('Philly is up!');
  };
}
