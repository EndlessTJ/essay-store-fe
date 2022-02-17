import { useEffect, useState } from "react";
import { Timeline, Empty } from 'antd'
import { getList } from '@api/index';

function File() {
  const [list, setList] = useState<Array<any>>([])
  useEffect(() => {
    getList({selection: 'frontlist', isFile: true, isPublish: true}).then((data)=>{
      setList(data.list)
    })
  },[])
  return <div>
    <p>归档--已经超过一年的文章归档，不会在列表中显示！</p>
    {list.length ? <Timeline>
      {list.map((item) => (<Timeline.Item key={item._id}>{item.title}</Timeline.Item>))}
    </Timeline> : <Empty/>}
  </div>
}

export default File;