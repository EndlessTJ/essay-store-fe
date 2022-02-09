import { Tag } from 'antd';
import { ArticleListModel } from '../../model';
import './index.scss'
function ListItem(props: {data: ArticleListModel}) {
  const { data }  = props;
  return <article className="list-item">
    <div className="container">
      <h3 className="title">{data.title}</h3>
      <p className="brief">{data.brief}</p>
      <div className="sub-area">
        <div className="tags">
          {data.type.map(item => <Tag className='tag' color="lime">{item}</Tag>)}
        </div>
        <div className="views">
          <span>{data.publishDate}</span>
          <span>{data.view}</span>
        </div>
      </div>
    </div>

  </article>
}
export default ListItem;