import Home from '@/pages/home/home';
import Article from '@/pages/article/article';
import File from '@/pages/file';
import CasualEnjoy from '@/pages/casual-enjoy';
import { routesModel } from '@/model';
export const routes:Array<routesModel> = [
  {
    path: '/home',
    element: <Home/>,
    key:'home'
  },
  {
    path: '/file',
    element: <File/>,
    key:'file'
  },
  {
    path: '/article',
    element: <Article/>,
    key:'article'
  },
  {
    path: '/casual-enjoy',
    element: <CasualEnjoy/>,
    key:'casual-enjoy'
  },
  {
    path:'/',
    redirect: '/home',
    key: 'reHome'
  }

];