import { get, put } from '@/request';
import { ListParamsModel } from '@/model';

export const getList = async (params: ListParamsModel) =>{
  const res = await get('/get', { params });
  return res.data
}

export const getArticle = async (params: { id: string, conType: string }) => {
  const res = await get('/get_article', {params});
  return res.data
}
// 更新浏览量
export const increaseViews = async (body: { id: string }) => {
  const res = await put('/increase_views', body);
  return res.data
}

// 请求标签列表
export const getTags = async () => {
  return await get('/tags/list');
}

