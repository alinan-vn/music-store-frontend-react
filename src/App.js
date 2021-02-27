import {BrowserRouter, Route} from 'react-router-dom'

import NavBar from './components/global/navbar/index';
import Footer from './components/global/footer/index';

import About from './components/about/index'
import AdminPage from './components/admin/adminPage'
import CustomerManagement from './components/admin/customerManagement/index'
import ProductInventory from './components/admin/productInventory/index'
import SongInventory from './components/admin/songInventory/index'

function App(){
  return(
    <div>
      <NavBar />
      <BrowserRouter>
        <Route exact path='/about' component={About} />
        <Route exact path='/admin/admin-page' component={AdminPage} />
        <Route exact path='/admin/customer-management' component={CustomerManagement} />
        <Route exact path='/admin/product-inventory' component={ProductInventory} />
        <Route exact path='/admin/song-inventory' component={SongInventory} />
        <Route exact path='/' component={} />
        <Route exact path='/' component={} />
        <Route exact path='/' component={} />
      </BrowserRouter>
      <Footer />
    </div>
  )
}


export default App;
