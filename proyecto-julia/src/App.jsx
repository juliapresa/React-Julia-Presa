import {BrowserRouter,  Route, Routes, Navigate} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartContextProvider } from './context/CartContext';
import { Checkout } from './components/Checkout/Checkout';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext } from 'react';
function App() {

  return (
    <CartContextProvider>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={ <ItemListContainer/>}/>
        <Route path='/category/:sid' element={ <ItemListContainer/>}/>
        <Route path='/detail/:pid' element={<ItemDetailContainer/>}/>
        <Route path='*' element={<Navigate to='/'/>}/>
        <Route path='/checkout/' element={<Checkout/>}></Route>
      </Routes>
    </BrowserRouter>
    </CartContextProvider>
  )
}
export default App