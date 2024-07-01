function handleIcon(item) {
  let itemLine = item.parentElement;
  let checkedIcon = itemLine.querySelector("#checked-icon");
  checkedIcon.classList.toggle("hidden");
  let uncheckedIcon = itemLine.querySelector("#unchecked-icon");
  uncheckedIcon.classList.toggle("hidden");
}

function handleText(item) {
  let itemLine = item.parentElement;
  let itemText = itemLine.querySelector("#item-text");
  itemText.classList.toggle("checked");
}

function handleItemClick(event) {
  if (event.target.tagName === "SPAN") {
    handleIcon(event.target);
    handleText(event.target);
  } else if (event.target.tagName === "I") {
    event.target.parentElement.remove();
  }
  saveData();
}

let itemList = document.querySelector("#item-list");
itemList.addEventListener("click", handleItemClick);

function addItem(item) {
  if (item != undefined) {
    itemList.innerHTML += `<div class="item"><span><span id="checked-icon" class="hidden">✅ </span><span id="unchecked-icon">⬜ </span><span id="item-text">${item}</span></span><i class="fa-solid fa-xmark fa-xl"></i></div>`;
  }
}

function handleSubmit(event) {
  event.preventDefault();
  let inputText = document.querySelector("#input-text");
  addItem(inputText.value);
  inputText.value = null;
  saveData();
}

let form = document.querySelector("#form");
form.addEventListener("submit", handleSubmit);

function saveData() {
  localStorage.setItem("data", itemList.innerHTML);
}

function showData() {
  itemList.innerHTML = localStorage.getItem("data");
}

showData();