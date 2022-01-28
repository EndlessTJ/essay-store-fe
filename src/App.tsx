import { useRef } from 'react'
import { Routes, Route, Link, Navigate, useLocation, Location } from "react-router-dom";
import { Layout, Menu } from 'antd';
import { routes } from './router';
import { routesModel } from './model';
import './App.css';
const { Header, Content, Footer } = Layout;
function App() {
  const location = useRef<Location>();
  location.current = useLocation();
  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className="logo" />
        <Menu theme="light" mode="horizontal" defaultSelectedKeys={[location.current.pathname.slice(1)]}>
          <Menu.Item key="home" ><Link to="/home">列表</Link></Menu.Item>
          <Menu.Item key="file"><Link to="/file">归档</Link></Menu.Item>
          <Menu.Item key="casual-enjoy"><Link to="/casual-enjoy">随享</Link></Menu.Item>
        </Menu>
      </Header>
      <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
          <Routes>
            {
              routes.map((route: routesModel) => route.redirect ? <Route key={route.key} path={route.path} element={<Navigate replace to={route.redirect} />} />
              :<Route key={route.key} path={route.path} element={route.element}></Route>)
            }
          </Routes>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>POWER BY REACT & CODE BY SIMBOL </Footer>
    </Layout>
  );
}

export default App;
