import TodoItem from "./TodoItem";
import todos from "./todo.json";
const TodoList = () => {
    return(
        <ul>
            {
                todos.map((todo, key) => {
                    return(<TodoItem todo={todo} key={key}/>);
                })
            }
        </ul>
    );
}
export default TodoList;