import './App.css';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GamesPage, RulesPage, TeamsPage, HomePage } from './pages';
import { Layout } from 'antd';
import { Navbar } from './components';

function App() {
  const { Footer, Content } = Layout;

  return (
    <Router basename="/uwccf-valorant">
      <Layout className="layout" style={{ minHeight: '100vh' }}>
        <Navbar />
        <Content className="site-layout-content full-height">
          <Switch>
            <Route exact path="/rules">
              <RulesPage />
            </Route>
            <Route exact path="/teams">
              <TeamsPage />
            </Route>
            {/* <Route path="/bracket">
              <BracketPage />
            </Route> */}
            <Route exact path="/games">
              <GamesPage />
            </Route>
            <Route exact path="/">
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
