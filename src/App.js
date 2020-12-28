import './App.css';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { BracketPage, HomePage, RulesPage, TeamsPage } from './pages';
import { Layout } from 'antd';
import { Navbar } from './components';

function App() {
  const { Footer, Content } = Layout;

  return (
    <Router>
      <Layout className="layout">
        <Navbar />

        <Content className="site-layout-content">
          <Switch>
            <Route path="/rules">
              <RulesPage />
            </Route>
            <Route path="/teams">
              <TeamsPage />
            </Route>
            {/* <Route path="/bracket">
              <BracketPage />
            </Route> */}
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          UWCCF Valorant ©2020 Created by hoklaamc
        </Footer>
      </Layout>
    </Router>
  );
}

export default App;
