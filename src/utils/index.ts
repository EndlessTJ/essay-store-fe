// 检测toLocaleDateString是否支持参数
const toLocaleDateStringSupportsLocales = () => {
  try {
      new Date().toLocaleDateString("i");
  } catch (e: any) {
      return e.name === "RangeError";
  }
  return false;
}


export const formatDate = (date: Date, mode?: string) => {
  if(!date) return;
  const tempDate = new Date(date);
  if(toLocaleDateStringSupportsLocales()){
    return tempDate.toLocaleDateString('zh-CN',{year: 'numeric', month: 'long' ,day:'2-digit' });
  }
  return tempDate.toLocaleDateString()
}