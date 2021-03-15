import React, { Component, Fragment, lazy, Suspense } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import loadable from '../Utils/loadable'

// 异步加载组件
const Home = loadable(() => import('./home'))
const List = loadable(() => import('./list'))
// const Detail = loadable(() => import('./detail'))
const Detail = lazy(() => import('./detail'))
const Login = loadable(() => import('./login'))
const Write = loadable(() => import('./write'))
const UseMediaQuery = loadable(() => import('./useMediaQuery'))
const MediaQuery = loadable(() => import('./mediaQuery'))

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
            <Route path='/UseMediaQuery' exact component={UseMediaQuery} />
            <Route path='/MediaQuery' exact component={MediaQuery} />
            <Route path='/list' exact component={List} />
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
