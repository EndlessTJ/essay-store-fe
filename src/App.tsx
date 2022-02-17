import { useRef } from 'react'
import { Routes, Route, Link, Navigate, useLocation, Location } from "react-router-dom";
import { Layout, Menu } from 'antd';
import { routes } from './router/router';
import { routesModel } from './model';
import './App.scss';
const { Header, Content, Footer } = Layout;
function App() {
  const location = useRef<Location>();
  location.current = useLocation();
  return (
    <Layout>
      <Header>
        <div className="header-menu">
          <div className="logo">
            <img src="logo.png" alt="" />
          </div>
          <Menu theme="light" mode="horizontal" defaultSelectedKeys={[location.current.pathname.slice(1)]}>
            <Menu.Item className="menu-item" key="home" ><Link to="/home">列表</Link></Menu.Item>
            <Menu.Item className="menu-item" key="file"><Link to="/file">归档</Link></Menu.Item>
            <Menu.Item className="menu-item" key="casual-enjoy"><Link to="/casual-enjoy">随享</Link></Menu.Item>
          </Menu>
        </div>
      </Header>
      <Content className="site-layout" >
        <div className="site-layout-background" >
          <Routes>
            {
              routes.map((route: routesModel) => route.redirect ? <Route key={route.key} path={route.path} element={<Navigate replace to={route.redirect} />} />
              :<Route key={route.key} path={route.path} element={route.element}></Route>)
            }
          </Routes>
        </div>
      </Content>
      <Footer className='footer'>POWER BY REACT & CODE BY SIMBOL </Footer>
    </Layout>
  );
}

export default App;
