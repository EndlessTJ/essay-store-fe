import { useNavigate } from 'react-router-dom';
import { ArticleListModel } from '@/model';
import NeckBar from '@components/neck-bar/neckBar';
import './index.scss';
function ListItem(props: {data: ArticleListModel}) {
  const { data }  = props;
  const navigate = useNavigate();
  const navigateTo = () => {
    navigate('/article', { state:{id: data._id }})
  }
  return <article className="list-item" onClick={navigateTo}>
    <div className="container">
      <h3 className="title">{data.title}</h3>
      <p className="brief">{data.brief}</p>
      <NeckBar tags={data.type} publishDate={data.publishDate} view={data.view} justify={'space-between'} />
    </div>

  </article>
}
export default ListItem;