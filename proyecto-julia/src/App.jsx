import {BrowserRouter,  Route, Routes} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/itemDetailContainer/itemDetailContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={ <ItemListContainer/>}/>
        <Route path='/category/:sid' element={ <ItemListContainer/>}/>
        <Route path='/detail:pid' element={<ItemDetailContainer/>}/>
        <Route path='*' element={<navigate to='/'/>}/>
      </Routes>
    </BrowserRouter>
    
  )
}
export default App