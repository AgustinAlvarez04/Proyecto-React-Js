import './App.css'
import Button from './Button/Button'
import NavBar from './NavBar/NavBar'
import ItemCount from './ItemCount/ItemCount'
import ItemListContainer from './ItemListContainer/ItemListContainer'

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer text="¡Bienvenidos!"/>
      <Button label="Apretame" handleClick={() => console.log("Holaaa")}/>
      <ItemCount title={"AAA"}/>
    </>
  )
}

export default App
