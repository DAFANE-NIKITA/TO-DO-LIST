document.addEventListener('DOMContentLoaded', () => {
    let taskInput = document.getElementById('taskInput');
    let AddTaskBtn = document.getElementById('AddTaskBtn');
    let TodoList = document.getElementById('TodoList');


    console.dir(taskInput.value);
    console.dir(AddTaskBtn.value);
    console.dir(TodoList);

    AddTaskBtn.addEventListener("click", () => {
        if (taskInput.value) {
            //Task add
            let task = document.createElement('li');
            task.textContent = taskInput.value, taskInput.value = "";
            TodoList.appendChild(task);
            console.log(`Task Was Add`);
            //Remove Button add
            let removeBtn = document.createElement('button');
            removeBtn.textContent = "Remove";
            removeBtn.classList.add('Remove-Btn')
            task.appendChild(removeBtn);


removeBtn.addEventListener('click',()=>{
    removeBtn.parentElement.remove();
    console.log(`Was Delete!`)
})

        }
    });
});