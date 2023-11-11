// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navrbar from './components/Navbar/Navrbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';

function App() {
  return <div>
        <Navrbar/>
        <ItemListContainer greeting="Bienvenidos a la Tienda Outlet" />
    </div>;
}

export default App;
