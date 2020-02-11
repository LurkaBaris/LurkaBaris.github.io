let todoArr = [];

window.onload = () => {
    const input = document.querySelector('.todo__add');
    const ul = document.querySelector('.todos');

    const clearBtn = document.querySelector(".clear");


    const img = "<img class='todos__img' src='img/delete.png'>";
    const imgEdit = "<img class='todos__img_update' src='img/edit.png'>";

    createItem = (value, check, wrapper) => {
        let li = wrapper ? wrapper : document.createElement('li');

        if (check) {
            li.className = "checked";
        } else {
            li.className = "";
        }

        li.addEventListener("click", (event) => onClickTodo(li));
        let text = document.createElement("span");
        text.className = "todos__text";
        text.append(value);

        let editBtn = document.createElement("span");
        editBtn.className = "todos__update";
        editBtn.innerHTML = imgEdit;

        editBtn.addEventListener("click", (event) => createItemEdit(li, text.innerHTML));

        let deleteBtn = document.createElement('span');
        deleteBtn.className = "todos__delete";
        deleteBtn.innerHTML = img;
        deleteBtn.addEventListener('click', () => deleteTodo(li, text.innerHTML));
        if (!!wrapper) {
            wrapper.append(text, editBtn, deleteBtn);
        } else {
            ul.appendChild(li).append(text, editBtn, deleteBtn);
        }
        showAll();
    };

    createItemEdit = (wrapper, value) => {
        event.stopPropagation();
        let isCheck = wrapper.classList.contains("checked");

        wrapper.innerHTML = "";

        wrapper.addEventListener("click", (event) => onClickTodo(wrapper));

        const input = document.createElement('input');
        input.value = value;

        input.addEventListener("blur", validateExit);

        input.addEventListener("input", validateExit);

        const cancelBtn = document.createElement("span");
        cancelBtn.className = "btn-create";
        cancelBtn.innerHTML = "X";

        cancelBtn.addEventListener("click", (event) => {
            event.stopPropagation();
            wrapper.innerHTML = "";
            createItem(value, isCheck, wrapper);
        });

        const saveBtn = document.createElement("span");
        saveBtn.className = "btn-create";
        saveBtn.innerHTML = "✔";

        saveBtn.addEventListener("click", (event) => {
            event.stopPropagation();
            todoArr.forEach(item => {
                if (item.title.toLowerCase() === input.value.toLowerCase()) {
                    input.value = value;

                    let validator = document.querySelector('.error');
                    validator.classList.add("error-active");
                }
            });

            if (input.value.trim().length === 0 || input.value === "," || input.value === value) {
                return;
            }

            todoArr.forEach((item) => {
                if (item.title === value) {
                    item.title = input.value;
                    item.checked = isCheck;
                }
            });

            saveLocalStorage();
            wrapper.innerHTML = "";

            createItem(input.value, isCheck, wrapper);
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
        todoArr.forEach(item => {
            if (item.title.toLowerCase() === input.value.toLowerCase()) {
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
        todoArr.forEach(item => {
            if (item.title === wrapper.firstElementChild.innerHTML) {
                item.checked = !item.checked;
            }
        });
        saveLocalStorage();
        wrapper.classList.toggle("checked");
    };

    loadTodos = () => {
        let data = JSON.parse(localStorage.getItem("todos"));
        if (data) {
            data.forEach((item) => {
                createItem(item.title, item.checked);

                todoArr.push({
                    title: item.title,
                    checked: item.checked
                });
            });
        }
        showAll();
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
            event.stopPropagation();
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
};

