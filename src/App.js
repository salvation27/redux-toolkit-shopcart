import React  from 'react';
import { BrowserRouter,Switch,Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Header from './components/Header/Header'
import Cart from './pages/Cart/Cart'
import DetailPage from './pages/DetailPage/DetailPage'
import Order from './pages/Order/Order'
import {Provider} from 'react-redux'
import {store} from './redux'
const App = () => {
  return (
     <Provider store={store}>  
         <BrowserRouter>
            <div className='App'>
            <Header />
            <Switch>
            <Route exact path='/'>
               <Home />
            </Route>
            <Route exact path='/about'>
               <About />
            </Route>
            <Route exact path='/cart'>
               <Cart />
            </Route>
            <Route exact path='/app/:title'>
               <DetailPage />
            </Route>
            <Route exact path='/order'>
               <Order />
            </Route>
            </Switch>
            </div>
         </BrowserRouter>
    </Provider>
  )
}

export default App
