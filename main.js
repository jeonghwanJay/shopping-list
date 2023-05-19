const items = document.querySelector(".items");
const form = document.querySelector(".form");
const input = document.querySelector(".footer__input");
const button = document.querySelector(".footer__addBtn");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  onAdd();
});

function onAdd() {
  const text = input.value;
  if (text === "") {
    input.focus();
    Swal.fire({
      icon: "error",
      title: "Blank",
      text: "내용을 입력해주세요!",
    });
  } else {
    const list = createList(text);
    items.append(list);
    list.scrollIntoView({ block: "center" });
    input.value = "";
    input.focus();
  }
}

let id = 0; // like UUID

function createList(text) {
  const itemsList = document.createElement("li");
  itemsList.setAttribute("class", "itemList");
  itemsList.setAttribute("data-id", id);
  itemsList.innerHTML = `
      <div class="items__listWrap" data-id="${id}">
        <span class="items__listName">${text}</span>
        <button class="items__deleteBtn">
          <i class="fa-regular fa-trash-can trash" data-id="${id}"></i>
        </button>
      </div>
      <div class="divider" data-id="${id}"></div>
  `;
  id++;
  return itemsList;
}

items.addEventListener("click", (event) => {
  const id = event.target.dataset.id;
  if (id) {
    const deleteList = document.querySelector(`.itemList[data-id="${id}"]`);
    deleteList.remove();
  }
});
