import { useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getArticle, increaseViews } from '../../api';
import { ArticleListModel } from '../../model';
import NeckBar from '../../components/neck-bar/neckBar';
import './index.scss';

function Article() {
  const [article, setArticle] = useState<ArticleListModel>()
  const {state:{id}} = useLocation() as { state:{id: string}};

  useEffect(() => {
    increaseViews({id}).then(() =>{}); // 更新浏览数据
    getArticle({id, conType: 'html'}).then((data)=>{
      setArticle(data)
    })
  }, [id]);
  if(!article) return null;
  return <article className="article">
    <h1 className="title">{article?.title}</h1>
    <NeckBar tags={article.type} publishDate={article.publishDate} view={article.view} />
    <section className="content" dangerouslySetInnerHTML={{ __html: article.content}}></section>
  </article>
}

export default Article;