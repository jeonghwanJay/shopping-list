const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const button = document.querySelector('.footer__addBtn');

function onAdd() {
    const text = input.value;
    const list = createList(text);
    items.append(list)
}

function createList(text) {
    const itemsList = document.createElement('li');
    itemsList.setAttribute('class', 'items__list')

    const itemsListWrap = document.createElement('div');
    itemsListWrap.setAttribute('class', 'items__listWrap');

    const itemsListName = document.createElement('span');
    itemsListName.setAttribute('class', 'items__listName');
    itemsListName.innerText = text;

    const itemsDeleteBtn = document.createElement('button');
    itemsDeleteBtn.setAttribute('class', 'items__deleteBtn');
    itemsDeleteBtn.addEventListener('click', () => {
        items.removeChild(itemsList);
    })

    itemsDeleteBtn.innerHTML = '<i class="fa-regular fa-trash-can"></i>';
    const divider = document.createElement('div');
    divider.setAttribute('class', 'divider');

    itemsListWrap.append(itemsListName);
    itemsListWrap.append(itemsDeleteBtn);

    itemsList.append(itemsListWrap);
    itemsList.append(divider);

    return itemsList;
}

button.addEventListener('click', () => {
    onAdd();
    input.value = '';
    input.focus();
})
