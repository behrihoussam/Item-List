const switchTheme = () => {
    if (body.classList.contains("light_theme")) {

        body.classList.remove("light_theme");
        body.classList.add("dark_theme");

        modal.classList.remove("items_lightTheme");
        modal.classList.add("items_darkTheme");

        theme.classList.remove("items_lightTheme");
        theme.classList.add("items_darkTheme");

        openModal.classList.remove("items_lightTheme");
        openModal.classList.add("items_darkTheme");

        itemContainer.classList.remove("items_lightTheme");
        itemContainer.classList.add("items_darkTheme");

        closeMenu.classList.remove("items_darkTheme");
        closeMenu.classList.add("items_lightTheme");

        addItem.classList.remove("items_darkTheme");
        addItem.classList.add("items_lightTheme");

    } else if (body.classList.contains("dark_theme")) {

        body.classList.remove("dark_theme");
        body.classList.add("light_theme");

        modal.classList.remove("items_darkTheme");
        modal.classList.add("items_lightTheme");

        theme.classList.remove("items_darkTheme");
        theme.classList.add("items_lightTheme");

        openModal.classList.remove("items_darkTheme");
        openModal.classList.add("items_lightTheme");

        itemContainer.classList.remove("items_darkTheme");
        itemContainer.classList.add("items_lightTheme");

        closeMenu.classList.remove("items_lightTheme");
        closeMenu.classList.add("items_darkTheme");

        addItem.classList.remove("items_lightTheme");
        addItem.classList.add("items_darkTheme");
    }
}
theme.addEventListener("click", switchTheme);
