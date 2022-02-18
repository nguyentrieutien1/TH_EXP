var inputElement = document.querySelector(".input");
var selectElement = document.querySelector("#select");
var addTodoBtn = document.querySelector(".btn-warning");
var body = document.querySelector("body");
var content = document.querySelector("#content");

var value;
var select = selectElement.value;
inputElement.onchange = function (event) {
  value = event.target.value;
};
selectElement.onchange = function (event) {
  select = event.target.value;
};

var arrTodo = JSON.parse(localStorage.getItem("arrTodo")) || [];
addTodoBtn.onclick = function (event) {
  event.preventDefault();
  var obj = {
    todo: value,
    status: select,
  };
  arrTodo.push(obj);

  localStorage.setItem("arrTodo", JSON.stringify(arrTodo));
  window.location.reload(true);
};
var arr = JSON.parse(localStorage.getItem("arrTodo"));
function showTodo(arr) {
  var result = arr.map(function (value, index) {
    var status = "";
    var classColor = "";
    if (value.status === "0") {
      status = "Hoạt động";
      classColor = "success";
    } else {
      status = "Không hoạt động";
      classColor = "danger";
    }

    return `<tr>
              <td>${value.todo}</td>
              <td>
                <span class="label label-${classColor}">${status}</span>
              </td>
              <td>
                <button type="button" class="btn btn-warning">EDIT</button>
                <button type="button" class="btn btn-primary delete-btn">DELETE</button>
              </td>
            </tr>`;
  });

  content.innerHTML = result.join("");
}
showTodo(arr);
var deleteBtn = document.querySelectorAll(".delete-btn");
deleteBtn.forEach(function (button, index) {
  button.onclick = function () {
    var arr = JSON.parse(localStorage.getItem("arrTodo"));
    console.log(index);
    arr.splice(index, 1);
    localStorage.setItem("arrTodo", JSON.stringify(arr));
    window.location.reload(true);
  };
});
