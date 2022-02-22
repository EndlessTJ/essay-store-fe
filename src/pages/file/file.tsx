import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Timeline, Empty } from 'antd';
import { getList } from '@api/index';
import './index.scss'

function File() {
  const [list, setList] = useState<Array<any>>([]);
  const navigate = useNavigate();
  useEffect(() => {
    getList({selection: 'frontlist', isFile: true, isPublish: true}).then((data)=>{
      console.log(data)
      const formatData = handleList(data);
      console.log(formatData)
      setList(formatData)
    })
  },[])

  // 数据处理
  const handleList =  (data:  {list: Array< {publishDate: Date }>}) => {
    const dateList = {} as {[key: string]: any};
    data.list.forEach((item:{publishDate: Date }) => {
     const year = new Date(item.publishDate).getFullYear();
     if(!dateList[year]) {
       dateList[year] = [];
     }
     dateList[year].push(item)
    });
    const flatData = Object.keys(dateList).reduce((acc, cur) => {
      dateList[cur][0]['showLabel'] = cur;
      return acc.concat(dateList[cur])
    }, [])
    return flatData
  }

  return <div className="file">
    <p className="description">归档--已经超过一年的文章归档，不会在列表中显示。</p>
    {list.length ? <Timeline className="time-line" mode="left">
      {list.map((item) => (<Timeline.Item label={<span className="item-label">{item.showLabel}</span>} color="red" key={item._id}>
        <span className="item-link" onClick={() => {navigate('/article', { state:{id: item._id}})}}>{item.title}</span>
        </Timeline.Item>))}
    </Timeline> : <Empty description="暂无数据～" className="no-data"/>}
  </div>
}

export default File;