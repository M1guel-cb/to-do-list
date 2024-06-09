const btn = document.querySelector("form button");
const input = document.querySelector("#task-input");
const ul = document.querySelector("#ul-task");
let api = JSON.parse(localStorage.getItem("to-do-list-m1guelcb") || "[]");

btn.addEventListener("click", (e) => {
    e.preventDefault();
    if (!input.value) {
        alert("Digite algo para inserir em sua lista!");
        return
    } else if (validar(input.value)) {
        alert("Valor já existente no TO-DO!");
        return
    } else {
        setarValores(input.value);
        mostrarValores();
        input.value = "";
    }
});

function validar(data) {
    for (task in api) {
        if (api[task].nome == data) {
            return true;
        }
    }
    return false;
}

function setarValores(task) {
    api.push({ nome: task });
    localStorage.setItem("to-do-list-m1guelcb", JSON.stringify(api));
}

function mostrarValores() {
    ul.innerHTML = "";
    for (item in api) {
        ul.innerHTML += `<li class="task">
                    <h2>${api[item].nome}</h2>
                    <div>
                        <button class="check" onclick=deleteValor("${api[item].nome}")><i class="fa-regular fa-circle-check"></i></button>
                    </div>
                </li>`;
    }
}

function deleteValor(data) {
    for (task in api) {
        if (api[task].nome == data) {
            api.splice(task, 1)
        }
    }
    localStorage.setItem("to-do-list-m1guelcb", JSON.stringify(api));
    mostrarValores();
}

mostrarValores();
