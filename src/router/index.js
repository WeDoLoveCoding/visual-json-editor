
import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect }  from 'react-router-dom'
import ErrorBundary from './ErrorBoundary'
import AuthorizedRoute from './AuthorizedRoute'

const Layout = lazy(() => import('@/pages/layout'))
const Home = lazy(() => import('@/pages/home'))
const About = lazy(() => import('@/pages/about'))
const Login = lazy(() => import('@/pages/login'))
const Other = lazy(() => import('@/pages/other'))
const User = lazy(() => import('@/pages/user'))
const NotFound = lazy(() => import('@/pages/notFound'))
const Me = lazy(() => import('@/pages/other/Me'))
const Contract = lazy(() => import('@/pages/other/Contract'))

const App = () => (
  <Router>
    <ErrorBundary>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/other" render={()=>
              <Other>
                  <Route path='/other/me' component={Me} />
                  <Route path='/other/contract' component={Contract} />
                  <Redirect to="/other/me" />
              </Other>
          } />
          <Route path="/" render={() => {
            return (
              <Layout>
                <Switch>
                  <Route exact path="/home" component={Home}/>
                  <Route exact path="/about" component={About}/>
                  <Route exact path="/login" component={Login}/>
                  <Redirect exact from='/' to="/home" />
                  <AuthorizedRoute path="/user" component={User} />
                  <Route component={NotFound} />
                </Switch>
              </Layout>
            )
          }}/>
        </Switch>
      </Suspense>
    </ErrorBundary>
  </Router>
)


export default App