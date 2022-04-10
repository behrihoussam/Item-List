const body = document.body;
const itemContainer = body.querySelector('.item_container');

const modal = document.getElementById("modal");
const backdrop = document.getElementById("backdrop");

const theme = document.getElementById("theme");
const openModal = document.getElementById("openModal");

const closeMenu = document.getElementById("closeMenu");
const addItem = document.getElementById("addItem");

const title = document.getElementById("title");
const image = document.getElementById("image");
const description = document.getElementById("description");

const createNewItem = () => {
    const newDiv = document.createElement("div");
    const newImage = document.createElement("img");
    const newTitle = document.createElement("h2");
    const newDescription = document.createElement("p");

    newDiv.append(newImage, newTitle, newDescription);
    newDiv.classList.add("item_container", "items_lightTheme");

    newTitle.innerHTML = title.value;
    newTitle.classList.add("item_title");

    newImage.src = image.value;
    newImage.classList.add("item_image");

    newDescription.innerHTML = description.value;
    newDescription.classList.add("item_description");

    body.insertAdjacentElement("beforeend", newDiv);
}
addItem.addEventListener("click", createNewItem);