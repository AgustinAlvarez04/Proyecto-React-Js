import './App.css'

import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Articulos from './components/Articulos/Articulos'
import Contador from './components/Contador/Contador'
import Categorias from './components/Categorias/Categorias'

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer />
      <Articulos img="http://placekitten.com/200/300" titulo="Gatico"> 
        <p>Es muy bonico!</p>
      </Articulos>
      <br />
      <Contador stock={10} inicial={0}/>
      <Categorias/>
    </>
  )
}

export default App
