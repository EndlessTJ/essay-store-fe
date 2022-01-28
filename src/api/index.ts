import { get } from '../request'
export const getList = async () =>{
  const res = await get('http://127.0.0.1:3000/get');
  return res.data
}