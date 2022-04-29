import React from 'react';
import { Route, Switch } from 'react-router-dom'
import ReactGA from 'react-ga';

// Layout
import Layout from './layout/Layout'

// pages
import Home from './pages/Home/Home.js'
import HtmlGo from './pages/HtmlGo/HtmlGo.js'
import Marvel from './pages/Marvel/Marvel.js'
import Dice from './pages/Dice/Dice.js'
import Wifi from './pages/Wifi/Wifi.js'
import Sprint from './pages/Sprint/Sprint.js'
import Post from './pages/Post/Post.js'
import Ambient from './pages/Ambient/Ambient.js'
import Earth from './pages/Earth/Earth.js'
import NotFound from './pages/NotFound/NotFound.js'
import Privacy from './pages/Privacy/Privacy.js'

ReactGA.initialize('UA-211306964-3');

const App = () => {
  return (
      <Layout>
        <Switch>
          <Route path='/' component={Marvel} exact />
          <Route path='/privacy-policy' component={Privacy} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
  )
}

export default App
