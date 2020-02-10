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
  public test = async (request: Request, response: Response) => {
    console.log(request);

    response.send('Philly is up!');
  };
}
