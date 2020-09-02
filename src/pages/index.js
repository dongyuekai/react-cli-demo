import React, { Component, Fragment, lazy, Suspense } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import loadable from '../Utils/loadable'

// 异步加载组件
const Home = loadable(() => import('./home'))
// const Detail = loadable(() => import('./detail'))
const Detail = lazy(() => import('./detail'))
const Login = loadable(() => import('./login'))
const Write = loadable(() => import('./write'))

export default class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' render={() => <Redirect to='/home' />} />
            <Route path='/home' exact component={Home} />
            <Route path='/login' exact component={Login} />
            <Route path='/write' exact component={Write} />
            <Route
              path='/detail/:id'
              exact
              component={() => (
                <Suspense
                  fallback={<div>Loading...Loading...Loading...Loading...</div>}
                >
                  <Detail />
                  <Detail />
                </Suspense>
              )}
            />
            <Route render={() => <div>Not Found</div>} />
          </Switch>
        </BrowserRouter>
      </>
    )
  }
}
