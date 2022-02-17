import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { Empty } from 'antd';
import { getList } from '@api/index';
import ListItem from '@components/list-item/listItem';
import Sidebar from '@components/sidebar/sidebar';
import { ListParamsModel } from '@/model';
import './index.scss';

function Home() {
  const [list, setList] = useState<Array<any>>();
  const [params] = useSearchParams();
  const searchStr = params.get('search');
  const tagStr = params.get('tag');
  const initParams = useRef<ListParamsModel>({selection: 'frontlist', isFile: false, isPublish: true} );
  useEffect(() => {
    getList(initParams.current).then((res) => {
      setList(res.list)
    })
  }, []);
  useEffect(() => {
    if(!!searchStr){
      initParams.current.title = searchStr;
      initParams.current.type = undefined;
    };
    if(!!tagStr){
      initParams.current.title = undefined;
      initParams.current.type = [tagStr];
    };
    if(!searchStr && !tagStr){
      initParams.current.title = undefined;
      initParams.current.type = undefined;
    }
    getList(initParams.current).then((res) => {
      setList(res.list)
    })
  },[searchStr, tagStr])
  return <div className="main">
    <div className="list">
      {list?.length ? list.map(item => <ListItem key={item._id} data={item} />) : <Empty />}
    </div>
    <div className="side-container">
      <Sidebar isSearch />
    </div>

  </div>
}

export default Home;