function markChecked(event) {
  console.log(event.target);
  event.target.classList.toggle("checked");
}

let itemList = document.querySelector("#item-list");
itemList.addEventListener("click", markChecked);

function addItem(item) {
  if (item != undefined) {
    let itemList = document.querySelector("#item-list");
    itemList.innerHTML += `<div class="item"><span><i class="fa-solid fa-circle fa-xl pe-2"></i>${item}</span><i class="fa-solid fa-xmark fa-xl"></i></div>`;
  }
}

function handleSubmit(event) {
  event.preventDefault();
  let inputText = document.querySelector("#input-text");
  addItem(inputText.value);
}

let form = document.querySelector("#form");
form.addEventListener("submit", handleSubmit);
