var taskInput = document.getElementById("task-input");
var result = document.getElementById("listNote");
document.addEventListener("DOMContentLoaded", function () {
    taskInput.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            var content = taskInput.value;
            //tạo element mới thêm vào
            var newElement = document.createElement("li");
            newElement.textContent = content;
            result === null || result === void 0 ? void 0 : result.appendChild(newElement);
            taskInput.value = "";
        }
    });
});
