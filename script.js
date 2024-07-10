//adding items via form

function handleCheck(item) {
  let itemLine = item.parentElement;
  let icon = itemLine.querySelector("#icon");
  icon.classList.toggle("icon-checked");
  let itemText = itemLine.querySelector("#item-text");
  itemText.classList.toggle("text-checked");
}

function handleItemClick(event) {
  if (event.target.parentElement.id === "item-left") {
    handleCheck(event.target);
  } else if (event.target.id === "xmark") {
    event.target.parentElement.remove();
  }
  saveData();
}

let itemList = document.querySelector("#item-list");
itemList.addEventListener("click", handleItemClick);

function addItem(item) {
  if (item != undefined) {
    itemList.innerHTML += `<div class="item"><span class="item-left" id="item-left"><span class="icon" id="icon">&#10004</span><span class="item-text" id="item-text">${item}</span>
</span><span class="xmark" id="xmark">&#10006</span></div>`;
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
      (itemList.innerHTML += `<div class="item"><span class="item-left" id="item-left"><span class="icon" id="icon">&#10004</span><span class="item-text" id="item-text">${item}</span>
</span><span class="xmark" id="xmark">&#10006</span></div>`)
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
