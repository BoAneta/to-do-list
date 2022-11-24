{
   const newTaskElement = document.querySelector(".js-newTask");
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
        <li>
        ${task.content}
        </li>
        `;
    }
    document.querySelector(".js-taskList").innerHTML = htmlString;
   }

    const onFormSubmit = (event) => {
    event.preventDefault();
    };
    
   const init = () => {

    render();

    const formElement = document.querySelector(".js-form");

    formElement.addEventListener("submit", onFormSubmit);
   };

   init();
}