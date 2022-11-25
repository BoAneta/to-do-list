{
  const buttonElement = document.querySelector(".js-button");
  const taskListElement = document.querySelector(".js-taskList");

  const tasks = [
    {
      content: "zjeść obiad",
      done: false,
    },
    {
      content: "umyć okna",
      done: false,
    },
  ];

  const addNewTask = (newTaskElement) => {
    tasks.push({
      content: newTaskElement,
    });
    render();
  };

  const removeTask = (taskIndex) => {
    tasks.splice(taskIndex, 1);
    render();
  };

  const toggleTaskDone = (taskIndex) => {
    tasks[taskIndex].done = !tasks[taskIndex].done;
    render();
  };

  const bindEvents = () => {
    const removeButtons = document.querySelectorAll(".js-remove");

    removeButtons.forEach((removeButton, index) => {
      removeButton.addEventListener("click", () => {
        removeTask(index);
      });
    });

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
        class="js-taskList taskList__item"
        ${task.done ? 'style="text-decoration: line-through"' : ""}>
        <button class="taskList__button taskList__button--done js-done">
        ${task.done ? "✓" : ""}</button>
        ${task.content}
        <button class="taskList__button taskList__button--remove js-remove">🗑</button>
        </li>
        `;
    };

    document.querySelector(".js-taskList").innerHTML = htmlString;

    bindEvents();
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const newTaskElement = document.querySelector(".js-newTask").value.trim();
    if (newTaskElement === "") {
      return;
    }
    addNewTask(newTaskElement);
  };

  const init = () => {
    render();

    const formElement = document.querySelector(".js-form");

    formElement.addEventListener("submit", onFormSubmit);
  };

  init();
}
