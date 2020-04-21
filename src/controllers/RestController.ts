import { Request, Response } from 'express';
import { getManager, ObjectLiteral } from 'typeorm';
import { Controller } from './Controller';

export abstract class RestController extends Controller{
  public abstract entity: string;
  public abstract restDir: string;
  public createTag: boolean = false;
  public restRelations: string[] | undefined;

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

    const instance: any = await repository.findOne(request.params.id);

    if(!instance) {
      return response.send('instance not found!'); // TODO throw exception
    }

    for (let bodyKey in request.body) {
      const key: string = bodyKey || '';

      if(instance.hasOwnProperty(key) && request.body.hasOwnProperty(key)) {
        instance[key] = request.body[key];
      }
    }

    /**
     * Update instance.
     */
    await repository.save(instance);

    /**
     * Return index.
     */
    const indexed = await repository.find(this.restOptions());

    return response.send(indexed);
  };

  /**
   *
   * @param options
   */
  protected restOptions(options: ObjectLiteral = {}): ObjectLiteral {
    if (this.restRelations) {
      options.relations = this.restRelations;
    }

    return options
  }
}
