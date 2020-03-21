// Without Interface
// function showToDo(todo: {title: string, text: string}) {
//     console.log(todo.title + ": " + todo.text);
// }
function showToDo(todo) {
    console.log(todo.title + ": " + todo.text);
}
var myTodo = {
    title: 'Trash',
    text: 'Take out trash'
};
showToDo(myTodo);
