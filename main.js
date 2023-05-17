const items = document.querySelector(".items");
const input = document.querySelector(".footer__input");
const button = document.querySelector(".footer__addBtn");
const keydown = false;
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

function createList(text) {
  const itemsList = document.createElement("li");
  itemsList.setAttribute("class", "items__list");

  const itemsListWrap = document.createElement("div");
  itemsListWrap.setAttribute("class", "items__listWrap");

  const itemsListName = document.createElement("span");
  itemsListName.setAttribute("class", "items__listName");
  itemsListName.innerText = text;

  const itemsDeleteBtn = document.createElement("button");
  itemsDeleteBtn.setAttribute("class", "items__deleteBtn");
  itemsDeleteBtn.addEventListener("click", () => {
    items.removeChild(itemsList);
  });

  itemsDeleteBtn.innerHTML = '<i class="fa-regular fa-trash-can"></i>';
  const divider = document.createElement("div");
  divider.setAttribute("class", "divider");

  itemsListWrap.append(itemsListName);
  itemsListWrap.append(itemsDeleteBtn);

  itemsList.append(itemsListWrap);
  itemsList.append(divider);

  return itemsList;
}

input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    onAdd();
  }
});

button.addEventListener("click", () => {
  onAdd();
});
