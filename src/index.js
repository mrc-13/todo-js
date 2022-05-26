import './styles.css';
import { Todo, TodoList } from './classes'
import { crearTodoHtml } from './js/componentes';
// import { TodoList } from './classes/todo-list.class.js';
// import { Todo } from './classes/todo.class.js';


export const todoList = new TodoList();

todoList.todos.forEach(todo => crearTodoHtml(todo));
