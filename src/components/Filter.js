import { useEffect, useState } from "react"
import { useAuth } from "../contexts/AuthContext";
import { useTheme } from "../contexts/ThemeContext";
import { useTodos } from "../contexts/TodosContext";

function Filter() {

    const { theme, setTheme } = useTheme();
    const { todos, setTodos } = useTodos();
    const { setIsLoggedIn } = useAuth();
    const [filterText, setFilterText] = useState('');
    const [show,setShow] = useState("all");
    

    useEffect(() => {
        console.log("loaded");
        const todosData = JSON.parse(localStorage.getItem("Todos"));
        const themeData = JSON.parse(localStorage.getItem("Theme"));
        const loggedData = JSON.parse(localStorage.getItem("Logged"));
        if (todosData || themeData || loggedData) {
            setTodos(todosData);
            setTheme(themeData);
            setIsLoggedIn(loggedData);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("Todos", JSON.stringify(todos))
    }, [todos]);

    useEffect(() => {
        localStorage.setItem("Theme", JSON.stringify(theme))
    }, [theme]);


    const filterCase = todos.filter(todo => {
        if (show === 'all') {
          return true;
        } else if (show === 'active') {
          return !todo.isCompleted;
        } else if (show === 'completed') {
          return todo.isCompleted;
        }
      });
    
    const filtered = filterCase.filter((item) => {
        return Object.keys(item).some((key) =>
            item[key].toString().toLowerCase().includes(filterText.toLocaleLowerCase())
        )
    })

    const handleMarked = (index) => {
        todos[index].isCompleted 
        ? todos[index].isCompleted = false
        : todos[index].isCompleted = true
        setTodos([...todos]);
      };

    return (
        <div>

            <div className="ui three buttons" style={{marginBottom:"15px"}}>
                <button className="ui button" onClick={()=>{setShow('all')}}>All</button>
                <button className="ui button" onClick={()=>{setShow('active')}}>Active</button>
                <button className="ui button" onClick={()=>{setShow('completed')}}>Completed</button>
            </div>

            <div className="ui input">
                <button className='ui button' onClick={()=>{theme === 'light' ? setTheme('dark'): setTheme('light')}}>Theme Change</button> 
                <input type="text" placeholder="Filter" onChange={(e) => { setFilterText(e.target.value) }} />
            </div>

            <div className="ui inverted segment">
                <div className="ui inverted relaxed divided list">
                    {filtered.map((filteredTodo, index) => (
                            <div className="item" key={index}>
                                <div className="content">
                                    {/* <div onClick={(event) => handleClick(event, filteredTodo)}> {filteredTodo.text} </div> */}
                                    <div className="header" onClick={() => handleMarked(index) } 
                                    style={filteredTodo.isCompleted ? {textDecoration:"line-through"} : {}}>{filteredTodo.text}</div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
            
        </div>
    )
}

export default Filter