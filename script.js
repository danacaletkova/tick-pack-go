let inputButton = document.querySelector("#input-submit");
let itemList = document.querySelector("#item-list");
let inputText = document.querySelector("#input-text");

function addItem(event) {
  event.preventDefault();
  console.log(inputText.value);
  if (inputText.value === "") {
    alert("You must enter something");
  } else {
    alert("this works");
  }
}

inputButton.addEventListener("click", addItem);
