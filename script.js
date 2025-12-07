let input = document.querySelector("input");
let form = document.querySelector("form");
let taskList = document.querySelector(".task-list");
let progress = document.getElementById("progress");
let numbers = document.getElementById("numbers");

let totalTasks = 0;
let completedTasks = 0;

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (input.value.trim() === "") return;

    addTask(input.value);
    input.value = "";
});

function addTask(taskText) {
    totalTasks++;

    let li = document.createElement("li");

    li.innerHTML = `
        <input type="checkbox" class="check">
        <span>${taskText}</span>
        <div class="icons">
            <i class="edit">✏️</i>
            <i class="del">🗑️</i>
        </div>
    `;

    taskList.appendChild(li);

    updateNumbers();

    li.querySelector(".check").addEventListener("change", () => {
        if (li.querySelector(".check").checked) {
            completedTasks++;
        } else {
            completedTasks--;
        }
        updateNumbers();
    });

    li.querySelector(".del").addEventListener("click", () => {
        if (li.querySelector(".check").checked) completedTasks--;
        li.remove();
        totalTasks--;
        updateNumbers();
    });

    li.querySelector(".edit").addEventListener("click", () => {
        let newTask = prompt("Edit your task:", taskText);
        if (newTask) li.querySelector("span").textContent = newTask;
    });
}

function updateNumbers() {
    numbers.textContent = `${completedTasks} / ${totalTasks}`;
    let percent = totalTasks ? (completedTasks / totalTasks) * 100 : 0;
    progress.style.width = percent + "%";
}