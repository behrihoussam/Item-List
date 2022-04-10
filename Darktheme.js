const switchTheme = () => {
    if (body.classList.contains("light_theme")
        && modal.classList.contains("items_lightTheme")
        && itemContainer.classList.contains("items_lightTheme")
        && closeMenu.classList.contains("items_darkTheme")
        && addItem.classList.contains("items_darkTheme")) {

        body.classList.remove("light_theme");
        body.classList.add("dark_theme");

        modal.classList.remove("items_lightTheme");
        modal.classList.add("items_darkTheme");

        itemContainer.classList.remove("items_lightTheme");
        itemContainer.classList.add("items_darkTheme");

        closeMenu.classList.remove("items_darkTheme");
        closeMenu.classList.add("items_lightTheme");

        addItem.classList.remove("items_darkTheme");
        addItem.classList.add("items_lightTheme");

    } else if (body.classList.contains("dark_theme")
        && modal.classList.contains("items_darkTheme")
        && itemContainer.classList.contains("items_darkTheme")
        && closeMenu.classList.contains("items_lightTheme")
        && addItem.classList.contains("items_lightTheme")) {

        body.classList.remove("dark_theme");
        body.classList.add("light_theme");

        modal.classList.remove("items_darkTheme");
        modal.classList.add("items_lightTheme");

        itemContainer.classList.remove("items_darkTheme");
        itemContainer.classList.add("items_lightTheme");

        closeMenu.classList.remove("items_lightTheme");
        closeMenu.classList.add("items_darkTheme");

        addItem.classList.remove("items_lightTheme");
        addItem.classList.add("items_darkTheme");
    }
}
theme.addEventListener("click", switchTheme);
/* 
.light_theme
.dark_theme
.lightTheme
.darkTheme 
*/