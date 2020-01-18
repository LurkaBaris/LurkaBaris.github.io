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

    let svgEdit = "<?xml version=\"1.0\" encoding=\"iso-8859-1\"?>\n" +
        "<!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n" +
        "<svg class=\"todos__svg_update\" version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n" +
        "\t viewBox=\"0 0 383.947 383.947\" style=\"enable-background:new 0 0 383.947 383.947;\" xml:space=\"preserve\">\n" +
        "<g>\n" +
        "\t<g>\n" +
        "\t\t<g>\n" +
        "\t\t\t<polygon points=\"0,303.947 0,383.947 80,383.947 316.053,147.893 236.053,67.893 \t\t\t\"/>\n" +
        "\t\t\t<path d=\"M377.707,56.053L327.893,6.24c-8.32-8.32-21.867-8.32-30.187,0l-39.04,39.04l80,80l39.04-39.04\n" +
        "\t\t\t\tC386.027,77.92,386.027,64.373,377.707,56.053z\"/>\n" +
        "\t\t</g>\n" +
        "\t</g>\n" +
        "</g>\n" +
        "<g>\n" +
        "</g>\n" +
        "<g>\n" +
        "</g>\n" +
        "<g>\n" +
        "</g>\n" +
        "<g>\n" +
        "</g>\n" +
        "<g>\n" +
        "</g>\n" +
        "<g>\n" +
        "</g>\n" +
        "<g>\n" +
        "</g>\n" +
        "<g>\n" +
        "</g>\n" +
        "<g>\n" +
        "</g>\n" +
        "<g>\n" +
        "</g>\n" +
        "<g>\n" +
        "</g>\n" +
        "<g>\n" +
        "</g>\n" +
        "<g>\n" +
        "</g>\n" +
        "<g>\n" +
        "</g>\n" +
        "<g>\n" +
        "</g>\n" +
        "</svg>\n";


    function createTodo() {
        let li = document.createElement('li');
        let text = document.createElement("span");
        text.className = "todos__text";
        if (input.value == "" || input.value.trim() == '' || input.value == ",") {
            return;
        }
        let newTodo = input.value;
        if (newTodo.length > 23) {
            newTodo = newTodo.slice(0, 23) + "...";
        }
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
                if (item.title === element.previousElementSibling.previousElementSibling.innerHTML) {
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
        element.addEventListener("click", function (event) {
            let editInput = document.createElement("input");
            let oldValue = element.previousElementSibling.innerHTML;
            editInput.value = oldValue;
            element.previousElementSibling.innerHTML = "";

            element.nextElementSibling.classList.toggle("todos__delete_display");

            editInput.addEventListener("keypress", function (eventBtn) {
                let keyEnter = 13;
                if (eventBtn.which == keyEnter) {
                    todoArr.forEach((value, index) => {
                        if (value.title === oldValue) {
                            let newValue = eventBtn.target.value;
                            if (newValue.length >23) {
                                newValue = newValue.slice(0,23) + "...";
                            }

                            value.title = newValue;
                        }
                    });

                    let strTitle = [];
                    todoArr.forEach(value => {
                       strTitle.push(value.title);
                    });

                    element.nextElementSibling.classList.toggle("todos__delete_display");
                    let newValue = eventBtn.target.value;
                    if (newValue.length >23) {
                        newValue = newValue.slice(0,23) + "...";
                    }
                    localStorage.setItem('todos', strTitle);
                    element.previousElementSibling.innerHTML = newValue;
                }
            });
            element.previousElementSibling.append(editInput);
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

    loadTodos();
}


document.addEventListener('DOMContentLoaded', onPageLoaded);