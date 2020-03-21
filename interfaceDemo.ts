// Without Interface
// function showToDo(todo: {title: string, text: string}) {
//     console.log(todo.title + ": " + todo.text);
// }

// let myTodo = {
//     title: 'Trash',
//     text: 'Take out trash'
// }

// showToDo(myTodo);

// With Interface
interface Todo {
    title: string;
    text: string;
}

function showToDo(todo: Todo) {
    console.log(todo.title + ": "+ todo.text)
}

let myTodo = {
    title: 'Trash',
    text: 'Take out trash'
}

showToDo(myTodo);