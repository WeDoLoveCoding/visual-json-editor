
import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect }  from 'react-router-dom'
import ErrorBundary from './ErrorBoundary' // 错误处理

const Layout = lazy(() => import('@/pages/layout'))
const Home = lazy(() => import('@/pages/home'))
const NotFound = lazy(() => import('@/pages/notFound'))

const App = () => (
  <Router>
    <ErrorBundary>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" render={() => {
            return (
              <Layout>
                <Switch>
                  <Route exact path="/home" component={Home}/>
                  <Redirect exact from='/' to="/home" />
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
