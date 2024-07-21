import ItemListContainer from './components/ItemListContainer';
import Header from './components/Header';
import Main from './components/Main'
import Footer from './components/Footer'
import './index.css';
import { BrowserRouter } from 'react-router-dom'
import CartProvider from "./components/CartProvider.jsx";



function App() {
  
  return (
    
    <BrowserRouter> 
    <CartProvider>
    <Header/>
    <Main/>
    <ItemListContainer/>
    <Footer/> 
    </CartProvider>     
    </BrowserRouter>      
  )
}

export default App;