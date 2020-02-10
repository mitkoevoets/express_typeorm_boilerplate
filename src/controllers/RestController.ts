import { Request, Response } from 'express';
import { getManager } from 'typeorm';
import { Controller } from './Controller';

// TODO: move to package

export abstract class RestController extends Controller {
  public abstract entity: string;
  public abstract restDir: string;
  public createTag: boolean = false;

  /**
   *
   * @param request
   * @param response
   */
  public find = async (request: Request, response: Response) => {
    const repository = getManager().getRepository(this.entity);

    const instance: {} | undefined| unknown = await repository.findOne(request.params.id);

    response.send(instance);
  };

  /**
   *
   * @param request
   * @param response
   */
  public list = async (request: Request, response: Response) => {
    const repository = getManager().getRepository(this.entity);

    const instances = await repository.find();

    response.send(instances);
  };

  /**
   *
   * @param request
   * @param response
   */
  public create = async (request: Request, response: Response) => {
    const repository = getManager().getRepository(this.entity);
    let body = request.body;

    if(this.createTag) {
      const tag = '_' + Math.floor(Date.now() / 1000);

      body = {...body, tag}
    }

    const newInstance = repository.create(body);

    await repository.save(newInstance);

    const indexed = await repository.find();

    response.send(indexed);
  };

  /**
   *
   * @param request
   * @param response
   */
  public update = async (request: Request, response: Response) => {
    const repository = getManager().getRepository(this.entity);


    const instance: {} | undefined | unknown = await repository.findOne(request.params.id);

    for (let bodyKey in request.body) {
      console.log(bodyKey);
      // instance[bodyKey] = request.body[bodyKey];
    }

    response.send(instance);
  };
}
