import { useState, useEffect } from "react";
import { getList } from '@api/index';
import ListItem from '@components/list-item/listItem';

function Home() {
  const [list, setList] = useState<Array<any>>()
  useEffect(() => {
    getList({selection: 'frontlist', isFile: false, isPublish: true}).then((res) => {
      setList(res.list)
    })
  }, []);
  return <div>
    {list?.length && list.map(item => <ListItem key={item._id} data={item} />)}
  </div>
}

export default Home;