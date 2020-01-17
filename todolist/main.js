function onPageLoaded() {
    let input = document.querySelector('.todo__add');
    let ul = document.querySelector('.todos');

    let saveBtn = document.querySelector(".save");
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
        let newTodo = input.value;
        text.append(newTodo);

        const deleteBtn = document.createElement('span');
        deleteBtn.className = "todos__delete";
        deleteBtn.innerHTML = svg;


        ul.appendChild(li).append(text, deleteBtn);
        input.value = "";

        deleteTodo(deleteBtn);
    }

    input.addEventListener("keypress", function (event) {
        let keyEnter = 13;
        if (event.which == keyEnter) {
            createTodo();
        }
    });

    function deleteTodo(element) {
        element.addEventListener("click", function (event) {
            element.parentElement.remove();
            event.stopPropagation();
        })
    }

    function onClickTodo(event) {
        if (event.target.tagName === "LI") {
            event.target.classList.toggle("checked");
        }
        if (event.target.className === "todos__text") {
            event.target.parentElement.classList.toggle("checked");
        }
    }

    function loadTodos() {
        let data = localStorage.getItem("todos");
        if (data) {
            ul.innerHTML = data;
        }
        let deleteBtns = document.querySelectorAll(".todos__delete");
        for (let btn of deleteBtns) {
            deleteTodo(btn);
        }
    }

    ul.addEventListener("click", onClickTodo);

    saveBtn.addEventListener('click', function () {
        localStorage.setItem("todos", ul.innerHTML);
    });

    clearBtn.addEventListener('click', function () {
        ul.innerHTML = "";
        localStorage.removeItem('todos', ul.innerHTML);
    });

    loadTodos();
}

document.addEventListener('DOMContentLoaded', onPageLoaded);

