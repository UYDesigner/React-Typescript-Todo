import { FormEvent, useState } from "react"
import { useTodos } from "../stroage/todos";

function Addtodo() {

    const [task, setTask] = useState('');
    const { handleAddToDo } = useTodos();
      

    

    const handleFormSubmit=(e : FormEvent<HTMLFormElement>)=>{
      e.preventDefault()
      handleAddToDo(task);
       setTask('');
    }

  return (
    <form  onSubmit={handleFormSubmit} >
        <input type="text" value={task}  onChange={(e)=>setTask(e.target.value)}
        // onChange={(e)=>handleTask(e)} 
        placeholder="Enter Task..."
        />
        <input type="submit" value="Add" 
        // onClick={handleAdd()}
         />
    </form>
  )
}

export default Addtodo