{
  let tasks = [];

  const addNewTask = (newTaskElement) => {
    tasks = [
      ...tasks,
      { content: newTaskElement },
    ];
    render();
  };

  const removeTask = (taskIndex) => {
    tasks = [
      ...tasks.slice(0, taskIndex),
      ...tasks.slice(taskIndex + 1),
    ];
    render();
  };

  const toggleTaskDone = (taskIndex) => {
    tasks = [
      ...tasks.slice(0, taskIndex),
      {
        ...tasks[taskIndex],
        done: !tasks[taskIndex].done,
      },
      ...tasks.slice(taskIndex + 1),
    ];
    render();
  };

  const bindRemoveEvents = () => {
    const removeButtons = document.querySelectorAll(".js-remove");

    removeButtons.forEach((removeButton, index) => {
      removeButton.addEventListener("click", () => {
        removeTask(index);
      });
    });
  };

  const bindToggleEvents = () => {
    const toggleDoneButtons = document.querySelectorAll(".js-done");

    toggleDoneButtons.forEach((toggleDoneButton, index) => {
      toggleDoneButton.addEventListener("click", () => {
        toggleTaskDone(index);
      });
    });
  };

  const render = () => {
    let htmlString = "";

    for (const task of tasks) {
      htmlString += `
        <li 
        class="js-taskList taskList__item">
        <button class="taskList__button taskList__button--done js-done">
        ${task.done ? "✓" : ""}</button>
        <span class="task__content${task.done ? " task__content--done" : ""
        }">${task.content}</span>
        <button class="taskList__button taskList__button--remove js-remove">🗑</button>
        </li>
        `;
    }

    document.querySelector(".js-taskList").innerHTML = htmlString;

    bindRemoveEvents();
    bindToggleEvents();
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const newTaskElement = document.querySelector(".js-newTask").value.trim();
    const newTaskContent = document.querySelector(".js-newTask");

    if (newTaskElement !== "") {
      addNewTask(newTaskElement);
      newTaskContent.value = "";
    }
    newTaskContent.focus();
  };

  const init = () => {
    render();

    const formElement = document.querySelector(".js-form");

    formElement.addEventListener("submit", onFormSubmit);
  };

  init();
}
