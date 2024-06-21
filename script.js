// function changeIcon(element) {
//   console.log(element);
//     let uncheckedIcon = `<i class="fa-solid fa-circle fa-xl pe-2"></i>`;
//     let checkedIcon = `<i class="fa-solid fa-circle-check fa-xl pe-2"></i>`;
//     element.outerHTML = checkedIcon + element.outerHTML;
//   }

function markChecked(event) {
  if (event.target.tagName === "SPAN") {
    event.target.classList.toggle("checked");
    // changeIcon(event.target);
  } else if (
    event.target.tagName === "I" &&
    event.target.parentElement.tagName != "SPAN"
  ) {
    event.target.parentElement.remove();
  }
}

let itemList = document.querySelector("#item-list");
itemList.addEventListener("click", markChecked);

function addItem(item) {
  if (item != undefined) {
    let itemList = document.querySelector("#item-list");
    itemList.innerHTML += `<div class="item"><span>${item}</span><i class="fa-solid fa-xmark fa-xl"></i></div>`;
  }
}

function handleSubmit(event) {
  event.preventDefault();
  let inputText = document.querySelector("#input-text");
  addItem(inputText.value);
}

let form = document.querySelector("#form");
form.addEventListener("submit", handleSubmit);
