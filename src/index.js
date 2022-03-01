import style from "./styles.css";
let root = document.getElementById(`root`);
let container = document.createElement(`div`);
let input = document.createElement(`input`);
let button = document.createElement(`button`);
button.innerText = `Add to list`;
root.append(container);
root.append(input);
root.append(button);
let addTodos = function () {
  container.innerHTML +=
    input.value + `<button class = "dele">Delete</button> <br>`;
};
button.addEventListener(`click`, addTodos);
