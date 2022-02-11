import { Tag } from 'antd';
import { useNavigate } from 'react-router-dom'
import { EyeOutlined, UploadOutlined, SendOutlined } from '@ant-design/icons';
import { ArticleListModel } from '../../model';
import { formatDate } from '../../utils'
import './index.scss'
function ListItem(props: {data: ArticleListModel}) {
  const { data }  = props;
  const navigate = useNavigate()
  const navigateTo = () => {
    navigate('/article', { state:{id: data._id }})
  }
  return <article className="list-item" onClick={navigateTo}>
    <div className="container">
      <h3 className="title">{data.title}</h3>
      <p className="brief">{data.brief}</p>
      <div className="sub-area">
        <div className="tags">
          {data.type.map(item => <Tag key={item} className='tag' color="lime">{item}</Tag>)}
        </div>
        <div className="views">
          <span className='publish-date'><span><SendOutlined className='publish-icon' />&nbsp;&nbsp;</span>{formatDate(data.publishDate)}</span>
          <span className='view'><EyeOutlined className='icon' />{data.view}</span>
        </div>
      </div>
    </div>

  </article>
}
export default ListItem;