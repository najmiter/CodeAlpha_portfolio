document.addEventListener("click", function (click) {
    if (
        !click.target.contains(mobile_navbar) &&
        !click.target.contains(burger)
    ) {
        hide_mobile_navbar();
    }
});
