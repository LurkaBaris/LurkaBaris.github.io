let todoArr = [];

window.onload = () => {
    const input = document.querySelector('.todo__add');
    const ul = document.querySelector('.todos');

    const clearBtn = document.querySelector(".clear");


    const img = "<img class='todos__img' src='img/delete.png'>";
    const imgEdit = "<img class='todos__img_update' src='img/edit.png'>";

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
        editBtn.innerHTML = imgEdit;

        editBtn.addEventListener("click", (event) => createItemEdit(li, text.innerHTML));

        let deleteBtn = document.createElement('span');
        deleteBtn.className = "todos__delete";
        deleteBtn.innerHTML = img;
        deleteBtn.addEventListener('click', () => deleteTodo(li, text.innerHTML));

        ul.appendChild(li).append(text, editBtn, deleteBtn);
    };

    createItemEdit = (wrapper, value) => {
        wrapper.innerHTML = "";
        let oldValue = value;

        const input = document.createElement('input');
        input.value = value;

        const cancelBtn = document.createElement("span");
        cancelBtn.className = "btn-create";
        cancelBtn.innerHTML = "X";

        cancelBtn.addEventListener("click", () => {
            createItem(value);
            wrapper.remove();
        });

        const saveBtn = document.createElement("span");
        saveBtn.className = "btn-create";
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

    createTodo = (e) => {
        let keyEnter = 13;
        if (e.which !== keyEnter) {
            return;
        }
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
    };


    input.addEventListener("keypress", () => createTodo(event));

    validateExit = () => {
        let validator = document.querySelector('.error');
        validator.classList.remove("error-active");
    };

    input.addEventListener("blur", validateExit);

    input.addEventListener("input", validateExit);


    deleteTodo = (element, value) => {
        todoArr.forEach(function (item, index, obj) {
            if (item.title === value) {
                obj.splice(index, 1);
            }
        });

        saveLocalStorage();
        element.remove();
    };

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

    loadTodos = () => {
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
    };

    clear = () => {
        todoArr = [];
        ul.innerHTML = "";
        localStorage.removeItem('todos');
    };

    clearBtn.addEventListener('click', clear);

    showAll = () => {
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
    };


    loadTodos();
    showAll();
};

