
import { BaseSyntheticEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Tag, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { getTags } from '@api/index';
import './index.scss';

function Sidebar(props: {className?: string, isSearch?: boolean}){
  const [tags, setTags] = useState<Array<{_id: string, name: string}>>();
  const navigate = useNavigate();
  useEffect(() => {
    getTags().then((tags: Array<{_id: string, name: string}>) => {
      setTags(tags)
    })
  },[]);
  const search = (e: BaseSyntheticEvent) => {
    navigate('/home?search=' + e.target.value, {replace: true})
  }

  const searchTag = (tag: string) => {
    navigate('/home?tag=' + tag, {replace: true})
  }
  const { className, isSearch } = props;
  const cls = 'sidebar '+ className;
  return <aside className={cls}>
    {isSearch && <section className="search section">
      <Input onPressEnter={search} className="search-input" size="middle" placeholder="输入文章标题～" prefix={<SearchOutlined />} />
    </section>}
    <section className="tags section">
      <h2>推荐标签</h2>
      {tags && tags.map(item => <Tag onClick={() => {searchTag(item.name)}} key={item._id} className='tag' color="red">{item.name}</Tag>)}
    </section>
  </aside>
}

export default Sidebar