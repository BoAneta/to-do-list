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
      done: true,
    },
  ];

  const render = () => {
    let htmlString = "";

    for (const task of tasks) {
      htmlString += `
        <li 
        ${task.done ? 'style="text-decoration: line-through"' : ""}>
        ${task.content}
        </li>
        `;
    }
    document.querySelector(".js-taskList").innerHTML = htmlString;
  };

  const addNewTask = (newTaskElement) => {
    tasks.push({
        content: newTaskElement,
      });
      render();
  }

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
