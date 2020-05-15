'use strict';
const tasks = ["Vyprat ponožky", "Naučit se funkce vyššího řádu", "Nakoupit na víkend"];

const updateTasks = () => {
  const HTML = document.querySelector(".todo__tasks");
  HTML.innerHTML = "";
  for (let i = 0; i < tasks.length; i++) {
    HTML.innerHTML += `<div class="task"> ${tasks[i]} </div>`;
  }
};
updateTasks();

const update2 = () => {
  const inputField = document.querySelector("#new-task");
  tasks.push(inputField.value);
  console.log("whatever");
  updateTasks();
}

document.querySelector(".btn-add").addEventListener("click", update2);

console.log('funguju!');