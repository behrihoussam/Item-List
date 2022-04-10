const toggleTheme = () => {
    if (body.classList.contains("light_theme")){
        body.classList.remove("light_theme");
        body.classList.add("dark_theme");
    } else {
        body.classList.add("light_theme");
        body.classList.remove("dark_theme");
    }
    
}
theme.addEventListener("click", toggleTheme);