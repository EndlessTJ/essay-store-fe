import { useState, useEffect } from "react";
import { getList } from '../api';
import { List, Typography } from 'antd'

function Home() {
  const [list, setList] = useState<Array<any>>()
  useEffect(() => {
    getList().then((res) => {
      setList(res.list)
    })
  }, []);
  return <List
  dataSource={list}
  renderItem={item => (
    <List.Item>
      <Typography.Text mark>[ITEM]</Typography.Text> {item.title}
    </List.Item>
  )}
/>
}

export default Home;