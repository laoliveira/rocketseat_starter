var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('todo-list')) || [];

renderTODOs();
buttonElement.onclick = addTODO;

function renderTODOs() {
    listElement.innerHTML = '';

    for(todo of todos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);
        var linkElement = document.createElement('a');
        var linkText = document.createTextNode('Excluir');
        var todoIndex = todos.indexOf(todo);

        linkElement.appendChild(linkText);
        linkElement.setAttribute('href', '#');
        linkElement.setAttribute('onclick', 'deleteTODO(' + todoIndex+ ')');
        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
    }
}

function addTODO(){
    var todoText = inputElement.value;
    
    todos.push(todoText);
    inputElement.value = '';
    renderTODOs();
    saveToStorage();
}

function deleteTODO(index){
    todos.splice(index, 1);
    renderTODOs();
    saveToStorage();
}

function saveToStorage(){
    localStorage.setItem('todo-list', JSON.stringify(todos));
}