// TODO: move to package

export interface AppRoute {
  path: string;
  method: string;
  action: any; // TODO: properly define type
}
