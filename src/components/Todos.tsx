import { useTodos } from "../stroage/todos"
import { useSearchParams } from "react-router-dom";
// import {loca}


function Todos() {

    const { todos, toggleAsCompleted, handleDelete } = useTodos();
    const [serachParams] = useSearchParams();
    let todosParam = serachParams.get("todos");
    console.log("param", todosParam);
    let filteredData = todos;
    if (todosParam === "Active") {
        filteredData = filteredData.filter((item) => {
            return !item.complete;
        })
    }
    if (todosParam === "Completed") {
        filteredData = filteredData.filter((item) => {
            return item.complete;
        })
    }



    return (
        <ul>
            {
                filteredData.map((item) => {


                    return <li key={item.id} >
                        <input type="checkbox" name="" id={item.id} checked={item.complete} onChange={() => toggleAsCompleted(item.id)} />
                        <label htmlFor={item.id} >{item.task}</label>
                        {
                            item.complete && (
                                <button type="button" onClick={() => handleDelete(item.id)}>Delete</button>
                            )
                        }
                    </li>
                })
            }
        </ul>
    )
}

export default Todos