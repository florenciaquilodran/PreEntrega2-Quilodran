import ItemListContainer from './components/ItemListContainer';
import Header from './components/Header';
import Main from './components/Main'
import Footer from './components/Footer'
import './index.css';
import { BrowserRouter } from 'react-router-dom'


function App() {
  
  return (
    <BrowserRouter> 
    <Header/>
    <Main/>
    <ItemListContainer/>
    <Footer/>  
    </BrowserRouter>
  )
}

export default App;
