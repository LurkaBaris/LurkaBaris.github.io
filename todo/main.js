let todoArr = [];

function onPageLoaded() {
    let input = document.querySelector('.todo__add');
    let ul = document.querySelector('.todos');

    let clearBtn = document.querySelector(".clear");


    let svg = "<img class='todos__svg' src='img/delete.png'>";
    let svgEdit = "<img class='todos__svg_update' src='img/edit.png'>";


    function createTodo() {
        todoArr.forEach(value => {
            if (value.title.toLowerCase() === input.value.toLowerCase()) {
                input.value = "";
                let validator = document.querySelector('.error');
                validator.classList.add("error-active");
            }
        });

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
        deleteBtn.addEventListener('click', () => deleteTodo(deleteBtn));

        let updateBtn = document.createElement("span");
        updateBtn.className = "todos__update";
        updateBtn.innerHTML = svgEdit;
        editTodo(updateBtn);

        ul.appendChild(li).append(text, updateBtn, deleteBtn);
        input.value = "";


        todoArr.push({
            title: newTodo,
            checked: false
        });

        let json = JSON.stringify(todoArr);

        showAll();

        localStorage.setItem("todos", json);
    }

    input.addEventListener("keypress", function (event) {
        let keyEnter = 13;
        if (event.which == keyEnter) {
            createTodo();
        }
    });

    input.addEventListener("blur", function () {
        let validator = document.querySelector('.error');
        validator.classList.remove("error-active");
    });

    input.addEventListener("input", function () {
        let validator = document.querySelector('.error');
        validator.classList.remove("error-active");
    });

    function deleteTodo(element) {
        todoArr.forEach(function (item, index, obj) {
            if (item.title === element.parentNode.firstElementChild.innerHTML) {
                obj.splice(index, 1);
            }
        });


        let json = JSON.stringify(todoArr);

        localStorage.setItem("todos", json);
        element.parentElement.remove();
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
            element.removeEventListener("click", edit);
            element.addEventListener('click', exitEdit);


            function exitEdit() {
                element.parentNode.firstElementChild.innerHTML = oldValue;
                editInput.remove();
                element.nextElementSibling.classList.toggle("todos__delete_display");
                element.firstElementChild.src = "img/edit.png";
                element.removeEventListener('click', exitEdit);
                element.addEventListener('click', edit);
            }

            editInput.focus();
            editInput.addEventListener("keypress", function (eventBtn) {
                let keyEnter = 13;
                if (eventBtn.which == keyEnter) {
                    todoArr.forEach(value => {
                        if (value.title.toLowerCase() === eventBtn.target.value.toLowerCase()) {
                            eventBtn.target.value = oldValue;
                        }
                    });

                    if (eventBtn.target.value.trim().length === 0 || eventBtn.target.value === "," || eventBtn.target.value === oldValue) {
                        return;
                    }


                    element.firstElementChild.src = "img/edit.png";
                    element.removeEventListener('click', exitEdit);

                    todoArr.forEach((value, index) => {
                        if (value.title === oldValue) {
                            value.title = eventBtn.target.value;
                        }
                    });
                    let json = JSON.stringify(todoArr);
                    element.addEventListener('click', edit);
                    element.nextElementSibling.classList.toggle("todos__delete_display");
                    let newValue = eventBtn.target.value;
                    localStorage.setItem('todos', json);
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
            let json = JSON.stringify(todoArr);
            localStorage.setItem("todos", json);
        }
        if (event.target.className === "todos__text") {
            todoArr.forEach(value => {
                if (value.title === event.target.innerHTML) {
                    value.checked = event.target.parentElement.classList.toggle("checked");
                }
            });
            let json = JSON.stringify(todoArr);
            localStorage.setItem("todos", json);
        }
    }

    function loadTodos() {
        let data = JSON.parse(localStorage.getItem("todos"));
        if (data) {
            {
                data.forEach((value) => {
                    let li = document.createElement('li');
                    let text = document.createElement("span");
                    text.className = "todos__text";
                    text.append(value.title);

                    let deleteBtn = document.createElement('span');
                    deleteBtn.className = "todos__delete";
                    deleteBtn.innerHTML = svg;
                    deleteBtn.addEventListener("click", () => deleteTodo(deleteBtn));

                    let updateBtn = document.createElement("span");
                    updateBtn.className = "todos__update";
                    updateBtn.innerHTML = svgEdit;
                    editTodo(updateBtn);

                    ul.appendChild(li).append(text, updateBtn, deleteBtn);


                    if (value.checked === true) {
                        li.className = "checked";
                    }

                    todoArr.push({
                        title: value.title,
                        checked: value.checked
                    });
                });
            }
        }
    }

    ul.addEventListener("click", onClickTodo);

    clearBtn.addEventListener('click', function () {
        todoArr = [];
        ul.innerHTML = "";
        localStorage.removeItem('todos');
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