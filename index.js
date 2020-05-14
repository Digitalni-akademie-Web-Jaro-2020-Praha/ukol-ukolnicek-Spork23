'use strict';
const tasks = ["Vyprat ponožky", "Naučit se funkce vyššího řádu", "Nakoupit na víkend"];
const updateTasks = () => {
  const HTML = document.querySelector(".todo__tasks");
  for (let i = 0; i < tasks.length; i++) {
    HTML.innerHTML += `<div class="task"> ${tasks[i]} </div>`;
  }
};
updateTasks();



console.log('funguju!');