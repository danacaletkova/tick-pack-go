//adding items via form

function handleIcon(item) {
  let itemLine = item.parentElement;
  let checkedIcon = itemLine.querySelector("#checked-icon");
  checkedIcon.classList.toggle("hidden");
  let uncheckedIcon = itemLine.querySelector("#unchecked-icon");
  uncheckedIcon.classList.toggle("hidden");
}

function handleText(item) {
  let itemLine = item.parentElement.parentElement;
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
    itemList.innerHTML += `<div class="item"><span class="item-left"><span><span id="checked-icon" class="hidden">✅ </span><span id="unchecked-icon">⬜ </span></span><span class="item-text" id="item-text">${item}</span></span><i class="fa-solid fa-xmark fa-xl"></i></div>`;
  }
}

function handleSubmit(event) {
  event.preventDefault();
  let inputText = document.querySelector("#input-text");
  addItem(inputText.value);
  inputText.value = null;
  saveData();
  inputText.focus();
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

//adding items via buttons

const buttonsData = {
  "btn-gym": [
    "gym clothes",
    "sneakers",
    "headphones",
    "watter bottle",
    "gym/sauna towel",
    "bathers",
    "fresh clothes",
    "fresh towel",
    "shower gel",
    "entry chip",
    "driver's license",
  ],
  "btn-library": [
    "laptop",
    "charging cable",
    "headphones",
    "pen & paper",
    "water bottle",
    "snacks",
    "extra jumper",
  ],
  "btn-shops": ["shopping list", "shopping bags", "wallet", "driver's license"],
  "btn-camping": [
    "swag",
    "stove",
    "dishes",
    "food",
    "drinks",
    "clothes",
    "table",
    "chairs",
    "shade sails",
    "torch",
    "mozzie spray",
    "national park pass",
  ],
  "btn-own": [],
};

function addAllItems(category) {
  itemList.innerHTML = "";
  let allItems = buttonsData[category];
  allItems.forEach(
    (item) =>
      (itemList.innerHTML += `<div class="item"><span class="item-left"><span><span id="checked-icon" class="hidden">✅ </span><span id="unchecked-icon">⬜ </span></span><span class="item-text" id="item-text">${item}</span></span><i class="fa-solid fa-xmark fa-xl"></i></div>`)
  );
  saveData();
}

function handleBtnClick(event) {
  event.preventDefault();
  addAllItems(event.target.id);
}

let buttons = document.querySelector("#buttons");
let btns = buttons.querySelectorAll("button");
btns.forEach((btn) => {
  btn.addEventListener("click", handleBtnClick);
});

let resetBtn = document.querySelector("#reset");
resetBtn.addEventListener("click", function () {
  itemList.innerHTML = "";
  saveData();
});
