import {BrowserRouter,  Route, Routes, Navigate} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext } from 'react';
export const AppContext = createContext ([]);
console.log (AppContext)
function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <AppContext.Provider>
      <Routes>
        <Route path='/' element={ <ItemListContainer/>}/>
        <Route path='/category/:sid' element={ <ItemListContainer/>}/>
        <Route path='/detail/:pid' element={<ItemDetailContainer/>}/>
        <Route path='*' element={<Navigate to='/'/>}/>
      </Routes>
      </AppContext.Provider>
    </BrowserRouter> 
  )
}
export default App