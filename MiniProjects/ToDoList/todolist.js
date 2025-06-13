window.onload = function() {

    const savedToDoList = JSON.parse(localStorage.getItem('todolist'))

    if (savedToDoList) {
        for (let todo of savedToDoList) {
            createToDo(todo)
        }
        
    }
    const startBtn = document.querySelector("#addBtn");
    startBtn.addEventListener("click", createToDo);

    const inputBox = document.querySelector("#inputBox")
    inputBox.addEventListener("keydown", function(event) {
        if (event.key === 'Enter')
            createToDo();
    });
}

function createToDo(todo) {
    
    if (todo == "" && inputBox.value == "") return;

    // new li 노드 생성
    const liNode = document.createElement('li');

    const checkBtn = document.createElement('button');
    checkBtn.classList.add("checkBtn");

    const todoText = document.createElement('span');
    if (todo) {
        todoText.innerText = todo.contents;
        if (todo.check) {
            todoText.classList.add('check');
            checkBtn.innerText = 'V';
        }
    } else {
        todoText.innerText = inputBox.value;
    }

    checkBtn.addEventListener("click", function() {
        todoText.classList.toggle('check');
        if (checkBtn.innerText == "")
            checkBtn.innerText = 'V';
        else {
            checkBtn.innerText = "";
        }
        console.log("save to list")
        saveToDoList();
    });


    const delBtn = document.createElement('button');
    delBtn.innerText = 'X';
    delBtn.classList.add("delBtn");
    delBtn.addEventListener("click", function() {
        liNode.remove();
        saveToDoList();
    });

    liNode.appendChild(checkBtn);
    liNode.appendChild(todoText);
    liNode.appendChild(delBtn);

    // ul에 new list append
    const ulNode = document.querySelector('ul');
    ulNode.appendChild(liNode);

    document.querySelector('#todolist').style.display = 'block'

    saveToDoList();
}

function saveToDoList() {
    const todoList = document.querySelectorAll('li');
    if (todoList.length == 0) return;

    const saveItems = [];
    for (let node of todoList) {
        const todo = node.querySelector('span').innerText;
        const check = node.querySelector('span').classList.contains('check');
        const todoObj = {
            contents : todo,
            check : check
        };
        saveItems.push(todoObj);
    }

    const list = JSON.stringify(saveItems);
    localStorage.setItem('todolist', list);
}