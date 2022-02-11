import { useState, useEffect } from "react";
import { getList } from '../api';
import ListItem from '../components/list-item/listItem';

function Home() {
  const [list, setList] = useState<Array<any>>()
  useEffect(() => {
    getList().then((res) => {
      setList(res.list)
    })
  }, []);
  return <div>
    {list?.length && list.map(item => <ListItem key={item._id} data={item} />)}
    
  </div> 
}

export default Home;