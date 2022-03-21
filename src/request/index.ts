  
import request, { AxiosRequestConfig } from 'axios';
const env = process.env.NODE_ENV;
const domain = env === 'development' ? 'http://127.0.0.1:3000': 'http://159.75.97.120:3000';

export const get = async (url: string, config?: AxiosRequestConfig):Promise<any> => {
   const res = await request.get(domain + url, config);
   return res.data;
}

export const post = async (url: string, data?: any, config?: AxiosRequestConfig):Promise<any> => {
   const res = await request.post(domain + url, data, config);
   return res.data;
   
}


export const put = async  (url: string, data:any, config?: AxiosRequestConfig):Promise<any> => {
  const res = await request.put(domain + url, data, config);
  return res.data;
}