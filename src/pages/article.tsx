import { useLocation } from "react-router-dom";
import { useEffect, useState } from 'react'
import { Tag } from 'antd';

import { EyeOutlined, UploadOutlined, SendOutlined } from '@ant-design/icons';
import { getArticle } from '../api';
import { ArticleListModel } from '../model';
import { formatDate } from '../utils'


function Article() {
  const [article, setArticle] = useState<ArticleListModel>()
  const {state:{id}} = useLocation() as { state:{id: string}};
  useEffect(() => {
    getArticle({id}).then((data)=>{
      setArticle(data)
    })
  }, []);
  if(!article) return null;
  return <article className="article">
    <h1>{article?.title}</h1>
    <div>
      <span className='publish-date'><span><SendOutlined className='publish-icon' />&nbsp;&nbsp;</span>{formatDate(article.publishDate)}</span>
      <div className="tags">
        {article.type.map(item => <Tag key={item} className='tag' color="lime">{item}</Tag>)}
      </div>
      <span className='view'><EyeOutlined className='icon' />{article.view}</span>
    </div>
    <section>
      {article.content}
    </section>
  </article>
}

export default Article;