const Invisible = true;

const closeModal = () => {
    modal.style.display = "none";
    backdrop.style.display = "none";
}
openModal.addEventListener("click", () => {
    if (Invisible === true) {
        modal.style.display = "grid";
        backdrop.style.display = "block";
    }
});
backdrop.addEventListener("click",closeModal);
closeMenu.addEventListener("click",closeModal);
addItem.addEventListener("click",closeModal);