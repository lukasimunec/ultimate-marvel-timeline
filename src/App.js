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
          <Route path='/' component={Home} exact />
          <Route path='/code-go' component={HtmlGo} exact />
          <Route path='/complete-marvel-timeline' component={Marvel} exact />
          <Route path='/streaming-roulette' component={Dice} exact />
          <Route path='/frame-your-wifi' component={Wifi} exact />
          <Route path='/sprint-name-generator' component={Sprint} exact />
          <Route path='/fake-a-post' component={Post} exact />
          <Route path='/ambient-creator' component={Ambient} exact />
          <Route path='/layers-of-earth' component={Earth} exact />
          <Route path='/privacy-policy' component={Privacy} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
  )
}

export default App
