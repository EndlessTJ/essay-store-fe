// 路由数据model
export interface routesModel {
  path: string;
  element?: Object;
  key?: string;
  redirect?: string;
}
// 文章数据
export interface ArticleListModel {
  _id: string;
  title: string;
  createDate: Date;
  type: Array<string>;
  content: string;
  publishDate: Date;
  updateDate: Date;
  view: number;
  brief: string;
  isPublish: boolean;
  isFile: boolean; // 是否归档
}

// 列表请求参数数据模型
export interface ListParamsModel {
  selection?: string;
  isFile?: Boolean;
  isPublish?: Boolean;
  title?: string;
  type?: Array<string>
}


// antd Menu组件点击事件会掉函数的参数Model
// export interface menuClickParamsModel {
//  key: string;
//  keyPath: Array<string>;
//  domEvent?: any
// }