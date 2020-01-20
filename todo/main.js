let todoArr = [];

function onPageLoaded() {
    let input = document.querySelector('.todo__add');
    let ul = document.querySelector('.todos');

    let clearBtn = document.querySelector(".clear");


    let svg = "<img class='todos__svg' src='img/delete.png'>";
    let svgEdit = "<img class='todos__svg_update' src='img/edit.png'>";


    function createTodo() {
        if (input.value.trim().length === 0 || input.value === ",") {
            return;
        }
        let li = document.createElement('li');
        let text = document.createElement("span");
        text.className = "todos__text";
        let newTodo = input.value;
        text.append(newTodo);


        let deleteBtn = document.createElement('span');
        deleteBtn.className = "todos__delete";
        deleteBtn.innerHTML = svg;


        let updateBtn = document.createElement("span");
        updateBtn.className = "todos__update";
        updateBtn.innerHTML = svgEdit;

        editTodo(updateBtn);

        ul.appendChild(li).append(text, updateBtn, deleteBtn);
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
        showAll();
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
                if (item.title === element.parentNode.firstElementChild.innerHTML) {
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

    function editTodo(element) {
        element.addEventListener("click", function edit(event) {
            let editInput = document.createElement("input");
            let oldValue = element.parentNode.firstElementChild.innerHTML;
            editInput.value = oldValue;
            element.parentNode.firstElementChild.innerHTML = "";

            element.nextElementSibling.classList.toggle("todos__delete_display");
            element.firstElementChild.src = "img/exit.png";




            element.parentNode.firstElementChild.append(editInput);
            element.removeEventListener("click",edit);
            element.addEventListener('click', exitEdit);
            function exitEdit() {
                element.parentNode.firstElementChild.innerHTML = oldValue;
                editInput.remove();
                element.nextElementSibling.classList.toggle("todos__delete_display");
                element.firstElementChild.src = "img/edit.png";
                element.removeEventListener('click',exitEdit);
                element.addEventListener('click',edit);
            }

            editInput.addEventListener("keypress", function (eventBtn) {
                let keyEnter = 13;
                if (eventBtn.which == keyEnter) {
                    if (eventBtn.target.value.trim().length === 0 || eventBtn.target.value === ",") {
                        return;
                    }
                    element.firstElementChild.src = "img/edit.png";

                    todoArr.forEach((value, index) => {
                        if (value.title === oldValue) {
                            value.title = eventBtn.target.value;
                        }
                    });
                    let strTitle = [];
                    todoArr.forEach(value => {
                        strTitle.push(value.title);
                    });

                    element.nextElementSibling.classList.toggle("todos__delete_display");
                    let newValue = eventBtn.target.value;
                    localStorage.setItem('todos', strTitle);
                    element.parentNode.firstElementChild.innerHTML = newValue;
                }
            });

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


                    let updateBtn = document.createElement("span");
                    updateBtn.className = "todos__update";
                    updateBtn.innerHTML = svgEdit;
                    editTodo(updateBtn);

                    ul.appendChild(li).append(text, updateBtn, deleteBtn);
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


    function showAll() {
        let span = document.createElement('span');
        span.innerHTML = "Показать полностью";
        span.className = "full";

        span.addEventListener('click', function (event) {
            let btn = event.target;
            btn.previousElementSibling.classList.toggle("full-active");
            if (btn.previousElementSibling.classList.contains("full-active")) {
                span.innerHTML = "Cкрыть"
            } else {
                span.innerHTML = "Показать полностью";
            }
        });

        let li = document.getElementsByTagName('LI');
        for (let item of li) {
            item.onmouseover = function (event) {
                if (item.firstElementChild.innerHTML.length > 28) {
                    item.firstElementChild.after(span);
                }
            };
            item.onmouseout = function (event) {
                if (!item.contains(event.relatedTarget)) {
                    span.remove();
                }
            }
        }
    }

    loadTodos();
    showAll();
}


document.addEventListener('DOMContentLoaded', onPageLoaded);