const taskInput = document.getElementById("task-input") as HTMLInputElement;
const result = document.getElementById("listNote");



document.addEventListener("DOMContentLoaded", function () {

    taskInput.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            const content = taskInput.value;

            //tạo element mới thêm vào
            const newElement = document.createElement("li");
            newElement.textContent = content;
            result?.appendChild(newElement);


            taskInput.value = "";

        }
    });


});


