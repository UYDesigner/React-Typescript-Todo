import { ReactNode, createContext, FC, useState, useContext } from "react";

// Define the types
export type TodosProviderProps = {
    children: ReactNode;
}

export type Todo = {
    id: string;
    task: string;
    complete: boolean;
    createdDate: Date;
}

export type TodoContext = {
    todos: Todo[];
    handleAddToDo: (task: string) => void;
    toggleAsCompleted: (id: string) => void;
    handleDelete: (id: string) => void;
}

// Create the context with an initial value of null
export const TodosContext = createContext<TodoContext | null>(null);

// Define the TodosProvider component
export const TodosProvider: FC<TodosProviderProps> = ({ children }) => {
    const [todos, setTodos] = useState<Todo[]>(()=>{
        try{
         const newtodos = localStorage.getItem("todos") || "[]";
         return JSON.parse(newtodos) as Todo[];
        }
        catch(error)
        {
            return[];
        };
        
    });

    const handleAddToDo = (task: string) => {

        setTodos((prev) => {

            const newTodos: Todo[] = [
                {
                    id: Math.random().toString(),
                    task: task,
                    complete: false,
                    createdDate: new Date()
                },
                ...prev
            ]
            localStorage.setItem("todos", JSON.stringify(newTodos));
            return newTodos;
        });

        console.log(todos)
    };


    const toggleAsCompleted = (id: string): void => {
        setTodos((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, complete: !item.complete } : item
            )
        );
    }

    const handleDelete = (id: string): void => {
        setTodos((prev) =>
            prev.filter((item) => {
                if (item.id != id)
                    return item;
            }
            )
        );
    }


    const contextValue = {
        todos,
        handleAddToDo,
        toggleAsCompleted,
        handleDelete
    };


    return (
        <TodosContext.Provider value={contextValue}>
            {children}
        </TodosContext.Provider>
    );
};

// Custom hook to use the TodosContext
export const useTodos = () => {
    const context = useContext(TodosContext);

    if (!context) {
        throw new Error("useTodos must be used within a TodosProvider");
    }

    return context;
}
