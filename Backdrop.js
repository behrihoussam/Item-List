const Invisible = true;

const itemModal = () => {
    modal.style.display = "none";
    backdrop.style.display = "none";
}
openModal.addEventListener("click", () => {
    if (Invisible === true) {
        modal.style.display = "grid";
        backdrop.style.display = "block";
    }
});
backdrop.addEventListener("click",itemModal);
closeMenu.addEventListener("click",itemModal);
addItem.addEventListener("click",itemModal);