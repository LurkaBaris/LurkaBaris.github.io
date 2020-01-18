let todoArr = [];

function onPageLoaded() {
    let input = document.querySelector('.todo__add');
    let ul = document.querySelector('.todos');

    let clearBtn = document.querySelector(".clear");


    let svg = "<svg class=\"todos__svg\"\n" +
        "                enable-background=\"new 0 0 91 91\"  id=\"Layer_1\" version=\"1.1\" viewBox=\"0 0 91 91\"\n" +
        "                 xml:space=\"preserve\" xmlns=\"http://www.w3.org/2000/svg\"\n" +
        "                xmlns:xlink=\"http://www.w3.org/1999/xlink\"><g><g><path d=\"M16.142,90.613H68.39c3.418,0,6.197-2.779,6.197-6.195V29.52l-58.445-0.002V90.613z\" fill=\"#647F94\"/><path\n" +
        "                d=\"M58.431,42.701c0-1.547,1.254-2.801,2.801-2.801s2.803,1.254,2.803,2.801v37.295    c0,1.549-1.256,2.801-2.803,2.801s-2.801-1.252-2.801-2.801V42.701z M42.56,42.701c0-1.547,1.254-2.801,2.803-2.801    c1.545,0,2.799,1.254,2.799,2.801v37.295c0,1.549-1.254,2.801-2.799,2.801c-1.549,0-2.803-1.252-2.803-2.801V42.701z     M26.688,42.701c0-1.547,1.256-2.801,2.801-2.801c1.547,0,2.803,1.254,2.803,2.801v37.295c0,1.549-1.256,2.801-2.803,2.801    c-1.545,0-2.801-1.252-2.801-2.801V42.701z\"\n" +
        "                fill=\"#95AEC2\"/><rect fill=\"#6EC4A7\" height=\"9.438\" width=\"66.611\" x=\"12.056\" y=\"14.479\"/><rect\n" +
        "                fill=\"#647F94\" height=\"7.887\" width=\"18.205\" x=\"36.259\" y=\"0.99\"/></g></g></svg>";


    function createTodo() {
        let li = document.createElement('li');
        let text = document.createElement("span");
        text.className = "todos__text";
        if (input.value == "" || input.value.trim() == '' || input.value == ",") {
            return;
        }
        let newTodo = input.value;
        if (newTodo.length > 20) {
            newTodo = newTodo.slice(0, 20) + "...";
        }
        text.append(newTodo);

        let deleteBtn = document.createElement('span');
        deleteBtn.className = "todos__delete";
        deleteBtn.innerHTML = svg;


        ul.appendChild(li).append(text, deleteBtn);
        input.value = "";

        deleteTodo(deleteBtn);

        todoArr.push({
            title: newTodo,
            checked: false
        });
        let strTitle = [];
        let strChecked = [];
        todoArr.forEach(value => {
            strTitle.push(value.title);
            strChecked.push(value.checked);
        });

        localStorage.setItem("todos", strTitle);
        localStorage.setItem("checked", strChecked);
    }

    input.addEventListener("keypress", function (event) {
        let keyEnter = 13;
        if (event.which == keyEnter) {
            createTodo();
        }
    });

    function deleteTodo(element) {
        element.addEventListener("click", function (event) {
            let strTitle = [];
            let strChecked = [];
            todoArr.forEach(function (item, index, obj) {
                if (item.title === element.previousElementSibling.innerHTML) {
                    obj.splice(index, 1);
                }
            });

            todoArr.forEach(value => {
                strTitle.push(value.title);
                strChecked.push(value.checked);
            });
            element.parentElement.remove();
            localStorage.setItem('todos', strTitle);
            localStorage.setItem("checked", strChecked);
            event.stopPropagation();
        })
    }

    function onClickTodo(event) {
        if (event.target.tagName === "LI") {
            todoArr.forEach(value => {
                if (value.title === event.target.firstElementChild.innerHTML) {
                    value.checked = event.target.classList.toggle("checked");
                }
            });
            let strTitle = [];
            let strChecked = [];
            todoArr.forEach(value => {
                strTitle.push(value.title);
                strChecked.push(value.checked);
            });
            localStorage.setItem('todos', strTitle);
            localStorage.setItem("checked", strChecked);
        }
        if (event.target.className === "todos__text") {
            todoArr.forEach(value => {
                if (value.title === event.target.innerHTML) {
                    value.checked = event.target.parentElement.classList.toggle("checked");
                }
            });
            let strTitle = [];
            let strChecked = [];
            todoArr.forEach(value => {
                strTitle.push(value.title);
                strChecked.push(value.checked);
            });
            localStorage.setItem('todos', strTitle);
            localStorage.setItem("checked", strChecked);
        }
    }

    function loadTodos() {
        let data = localStorage.getItem("todos");
        let dataCheck = localStorage.getItem("checked");
        if (data) {
            {
                let arr = data.split(',');
                for (let item of arr) {
                    let li = document.createElement('li');
                    let text = document.createElement("span");
                    text.className = "todos__text";
                    text.append(item);

                    let deleteBtn = document.createElement('span');
                    deleteBtn.className = "todos__delete";
                    deleteBtn.innerHTML = svg;
                    deleteTodo(deleteBtn);

                    ul.appendChild(li).append(text, deleteBtn);
                    todoArr.push({
                        title: item
                    })
                }
                let arrCheck = dataCheck.split(',');
                arrCheck.forEach((value, index) => {
                    let lies = document.getElementsByClassName("todos__text");
                    if (value === "true") {
                        lies[index].parentElement.className = "checked";
                        todoArr[index].checked = "true";
                    }
                    if (value === "false") {
                        todoArr[index].checked = "false";
                    }
                })
            }
        }
    }

    ul.addEventListener("click", onClickTodo);

    clearBtn.addEventListener('click', function () {
        todoArr = [];
        ul.innerHTML = "";
        localStorage.removeItem('todos');
        localStorage.removeItem("checked");
    });

    loadTodos();
}


document.addEventListener('DOMContentLoaded', onPageLoaded);