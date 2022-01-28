// 路由数据model
export interface routesModel {
  path: string;
  element?: Object;
  key?: string;
  redirect?: string;
}

// antd Menu组件点击事件会掉函数的参数Model
// export interface menuClickParamsModel {
//  key: string;
//  keyPath: Array<string>;
//  domEvent?: any
// }