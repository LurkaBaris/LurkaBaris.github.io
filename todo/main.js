let todoArr = [];

function onPageLoaded() {
    let input = document.querySelector('.todo__add');
    let ul = document.querySelector('.todos');

    let clearBtn = document.querySelector(".clear");
    clearBtn.addEventListener('click', clear);

    let svg = "<img class='todos__svg' src='img/delete.png'>";
    let svgEdit = "<img class='todos__svg_update' src='img/edit.png'>";

    createItem = (value, check) => {
        let li = document.createElement('li');
        if (check) {
            li.className = "checked";
        } else {
            li.className = "";
        }
        li.addEventListener("click", () => onClickTodo(li));
        let text = document.createElement("span");
        text.className = "todos__text";
        text.append(value ? value : input.value);

        let editBtn = document.createElement("span");
        editBtn.className = "todos__update";
        editBtn.innerHTML = svgEdit;

        editBtn.addEventListener("click", (event) => createItemEdit(li, text.innerHTML));

        let deleteBtn = document.createElement('span');
        deleteBtn.className = "todos__delete";
        deleteBtn.innerHTML = svg;
        deleteBtn.addEventListener('click', () => deleteTodo(li, text.innerHTML));

        ul.appendChild(li).append(text, editBtn, deleteBtn);
    };

    createItemEdit = (wrapper, value) => {
        wrapper.innerHTML = "";
        let oldValue = value;

        const input = document.createElement('input');
        input.value = value;

        const cancelBtn = document.createElement("span");
        cancelBtn.innerHTML = "X";

        cancelBtn.addEventListener("click", () => {
            createItem(value);
            wrapper.remove();
        });

        const saveBtn = document.createElement("span");
        saveBtn.innerHTML = "✔";

        saveBtn.addEventListener("click", () => {
            todoArr.forEach(value => {
                if (value.title.toLowerCase() === input.value.toLowerCase()) {
                    input.value = oldValue;
                }
            });

            if (input.value.trim().length === 0 || input.value === "," || input.value === oldValue) {
                return;
            }

            todoArr.forEach((value) => {
                if (value.title === oldValue) {
                    value.title = input.value;
                    value.checked = false;
                }
            });
            saveLocalStorage();
            wrapper.remove();
            createItem(input.value, false);
            showAll();
        });

        wrapper.append(input, cancelBtn, saveBtn);
    };

    saveLocalStorage = () => {
        let json = JSON.stringify(todoArr);
        localStorage.setItem("todos", json);
    };


    function createTodo() {
        todoArr.forEach(value => {
            if (value.title.toLowerCase() === input.value.toLowerCase()) {
                input.value = "";
                let validator = document.querySelector('.error');
                validator.classList.add("error-active");
            }
        });

        if (!input.value.trim().length || input.value === ",") {
            return;
        }

        createItem(input.value);

        todoArr.push({
            title: input.value,
            checked: false
        });

        input.value = "";

        showAll();

        saveLocalStorage();
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

    function deleteTodo(element, value) {
        todoArr.forEach(function (item, index, obj) {
            if (item.title === value) {
                obj.splice(index, 1);
            }
        });


        saveLocalStorage();
        element.remove();
    }

    onClickTodo = wrapper => {
        if (event.target.tagName === "LI") {
            todoArr.forEach(value => {
                if (value.title === wrapper.firstElementChild.innerHTML) {
                    value.checked = wrapper.classList.toggle("checked");
                }
            });
            saveLocalStorage();
        }
        if (event.target.className === "todos__text" || event.target.className === "todos__text full-active") {
            todoArr.forEach(value => {
                if (value.title === wrapper.firstElementChild.innerHTML) {
                    value.checked = wrapper.classList.toggle("checked");
                }
            });
            saveLocalStorage();
        }
    };

    function loadTodos() {
        let data = JSON.parse(localStorage.getItem("todos"));
        if (data) {
            {
                data.forEach((value) => {
                    createItem(value.title, value.checked);

                    todoArr.push({
                        title: value.title,
                        checked: value.checked
                    });
                });
            }
        }
    }



    clear = () => {
        todoArr = [];
        ul.innerHTML = "";
        localStorage.removeItem('todos');
    };


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