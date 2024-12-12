const InputBox = document.getElementById('inputBox');
const addBTn = document.getElementById('addbtn');
const todoLIST = document.getElementById('TodoList');

const addTDO = () => {
  const inputText = InputBox.value.trim();
  if (inputText.length <= 0) {
    alert("You must write something.");
    return;
  }

  // Create `li` and `p` elements
  const li = document.createElement("li");
  const p = document.createElement("p");
  p.innerHTML = inputText;
  li.appendChild(p);

  // Create the Edit button
  const editbtn = document.createElement("button");
  editbtn.innerText = "Edit";
  editbtn.classList.add("btn", "editBtn");
  li.appendChild(editbtn);

  // Add functionality to the Edit button
  editbtn.addEventListener("click", () => {
    InputBox.value = p.innerHTML; // Populate the input box with the current text
    todoLIST.removeChild(li); // Remove the current list item
  });

  // Create the Delete button
  const dlbtn = document.createElement("button");
  dlbtn.innerText = "Remove";
  dlbtn.classList.add("btn", "dlbtn");
  li.appendChild(dlbtn);

  // Add functionality to the Delete button
  dlbtn.addEventListener("click", () => {
    todoLIST.removeChild(li); // Remove the list item
  });

  // Append the new `li` to the todo list
  todoLIST.appendChild(li);

  // Clear the input box
  InputBox.value = "";
};

addBTn.addEventListener("click", addTDO);
