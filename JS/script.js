{
   const newTaskElement = document.querySelector(".js-newTask");
   const buttonElement = document.querySelector(".js-button");
   const taskListElement = document.querySelector(".js-taskList");

    const onFormSubmit = (event) => {
    event.preventDefault();
    };
    
   const init = () => {
    const formElement = document.querySelector(".js-form");

    formElement.addEventListener("submit", onFormSubmit);
   };

   init();
}