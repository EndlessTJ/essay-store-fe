import { get, put } from '@/request';

export const getList = async (params: {selection?: string, isFile?: Boolean, isPublish?: Boolean}) =>{
  const res = await get('/get', { params });
  return res.data
}

export const getArticle = async (params: { id: string, conType: string }) => {
  const res = await get('/get_article', {params});
  return res.data
}

export const increaseViews = async (body: { id: string }) => {
  const res = await put('/increase_views', body);
  return res.data
}