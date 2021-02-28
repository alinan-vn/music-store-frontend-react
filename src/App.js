import {BrowserRouter, Route} from 'react-router-dom'

import NavBar from './components/global/navbar/index';
import Footer from './components/global/footer/index';

import Home from './components/home/index'
import About from './components/about/index'

import Login from './components/customer/login/index'
import Profile from './components/customer/profile/index'
import Register from './components/customer/register/index'

import Cart from './components/shopping/cart/index'
import Checkout from './components/shopping/checkout/index'
import PurchaseConfirmation from './components/shopping/purchaseConfirmation/index'

import AllProducts from './components/products/allProducts/index'
import AllCategories from './components/products/categories/allCategories/index'
import ProductsBySelectedCategory from './components/products/categories/productsBySelectedCategory/index'
import ProductDetail from './components/products/productDetail/index'
import AllSongs from './components/songs/allSongs/index'
import AllGenres from './components/songs/genres/allGenres/index'
import SongsBySelectedGenre from './components/songs/genres/songsBySelectedGenre/index'
import SongDetail from './components/songs/songDetail/index'

import SearchResults from './components/searchResults/index'

import AdminLogin from './components/admin/adminLogin/index'
import AdminPage from './components/admin/adminPage'
import CustomerManagement from './components/admin/customerManagement/index'
import ProductInventory from './components/admin/productInventory/index'
import SongInventory from './components/admin/songInventory/index'

function App(){
  return(
    <div>
      <NavBar />
      <BrowserRouter>
        <Route exact path='/home' component={Home} />
        <Route exact path='/about' component={About} />
        
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/profile' component={Profile} />

        <Route exact path='/cart' component={Cart} />
        <Route exact path='/checkout' component={Checkout} />
        <Route exact path='/purchase-confirmation' component={PurchaseConfirmation} />

        <Route exact path='/all-products' component={AllProducts} />
        <Route exact path='/all-categories' component={AllCategories} />
        <Route exact path='/products-by-selected-category' component={ProductsBySelectedCategory} />
        <Route exact path='/product-detail' component={ProductDetail} />
        <Route exact path='/all-songs' component={AllSongs} />
        <Route exact path='/all-genres' component={AllGenres} />
        <Route exact path='/songs-by-selected-genre' component={SongsBySelectedGenre} />
        <Route exact path='/song-detail' component={SongDetail} />

        <Route exact path='/search-results' component={SearchResults} />

        <Route exact path='/admin/login' component={AdminLogin} />
        <Route exact path='/admin/admin-page' component={AdminPage} />
        <Route exact path='/admin/customer-management' component={CustomerManagement} />
        <Route exact path='/admin/product-inventory' component={ProductInventory} />
        <Route exact path='/admin/song-inventory' component={SongInventory} />
      </BrowserRouter>
      <Footer />
    </div>
  )
}


export default App;
