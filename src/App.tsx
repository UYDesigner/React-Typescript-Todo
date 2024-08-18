import Addtodo from "./components/Addtodo"
import NavBar from "./components/NavBar"
import Todos from "./components/Todos"

function App() {
  return (
    <div>
      <h1>TODO-REACTJS-TYPESCRIPT</h1>
      <hr></hr>
      <NavBar/>
      <Addtodo/>
      <Todos/>
      <div></div>
    </div>
  )
}

export default App
