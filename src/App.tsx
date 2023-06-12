import Sider from 'antd/es/layout/Sider';
import './styles/dashboard.css';
import { Content, Header } from 'antd/es/layout/layout';
import { Menu, Layout, Card, Typography } from 'antd';
import { menuItems } from './constants/Siders';
import { GiHamburgerMenu } from 'react-icons/gi';
import React, { useState } from 'react';
function App() {
  const [collpased, setCollpased] = useState<boolean>(false);

  const handleCollpased = () => {
    setCollpased((preState) => !preState);
  };

  return (
    <Layout className="container">
      <Header
        style={{
          backgroundColor: 'white',
        }}
      >
        <div className="menu">
          <GiHamburgerMenu size={23} onClick={handleCollpased} style={{ marginRight: 20 }} />
          <div className="brand">Admin-Page</div>
        </div>
      </Header>

      <Layout>
        <Sider collapsed={collpased} theme="light">
          <Menu mode="inline" items={menuItems} />
        </Sider>
        <Content className="content">
          <Card>
            <Typography.Title>Sales</Typography.Title>
            <Typography.Paragraph>
              added 69 packages, and audited 279 packages in 25s 40 packages are looking for funding run `npm
              fund` for details found 0 vulnerabilities
            </Typography.Paragraph>
          </Card>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
