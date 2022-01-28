  
import request, { AxiosRequestConfig } from 'axios';


export const get = async (url: string, config?: AxiosRequestConfig):Promise<any> => {
   const res = await request.get(url, config);
   return res.data;
}

export const post = async (url: string, data?: any, config?: AxiosRequestConfig):Promise<any> => {
   const res = await request.post(url, data, config);
   return res.data;
   
}


export const put = async  (url: string, data:any, config?: AxiosRequestConfig):Promise<any> => {
  const res = await request.put(url, data, config);
  return res.data;
}