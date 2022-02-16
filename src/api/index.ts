import { get, put } from '../request'
export const getList = async (params: {selection?: string, isFile?: Boolean, isPublish?: Boolean}) =>{
  const res = await get('http://127.0.0.1:3000/get', { params });
  return res.data
}

export const getArticle = async (params: { id: string, conType: string }) => {
  const res = await get('http://127.0.0.1:3000/get_article', {params});
  return res.data
}

export const increaseViews = async (body: { id: string }) => {
  const res = await put('http://127.0.0.1:3000/increase_views', body);
  return res.data
}