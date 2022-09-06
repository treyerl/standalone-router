interface Request {
  base: string,
  params: {},
  path: string,
  route: string,
  state: {},
  query: {}
}

interface Response {}

type MiddlewareFn = (req: Request, res: Response, next?: Function) => MiddlewareFn|undefined
type RouterFn = (req: Request, res: Response, props?: {}) => any

interface Middleware {
  use: MiddlewareFn,
  execute: (fn: MiddlewareFn) => any
}

interface GetRouter {
  get(fn: RouterFn): Router;
  get(route: string, fn: RouterFn): Router;
  get(route: string, middlewares: Array<MiddlewareFn>, fn: RouterFn): Router;
}

interface UseRouter {
  use(fn: RouterFn): Router;
}

interface CatchRouter {
  catch(fn: RouterFn): Router;
  catch(route: string, fn: RouterFn): Router;
  catch(route: string, middlewares: Array<MiddlewareFn>, fn: RouterFn): Router;
}

interface Router extends GetRouter, UseRouter, CatchRouter{}

interface RouteParameter {
  index: number,
  parameter: string,
  identifier: string
}

interface Route {
  base: string,
  route: string,
  regexpRoute: string,
  parameters: Array<RouteParameter>,
  callback: RouterFn,
  middlewares: Array<MiddlewareFn>
}

export {
  Request,
  Response,
  Middleware,
  MiddlewareFn,
  Router,
  RouterFn,
  GetRouter,
  UseRouter,
  CatchRouter,
  Route
}