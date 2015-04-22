var menuBtn = document.getElementById("menu-button");

function toggle_menu() {
    var nav_el = document.getElementById("nav-box");
    nav_el.toggleClassName("expanded");
}

function hi_cur_link () {
    var doc_title = document.title;
    var doc_subtitle = doc_title.split(" :: ")[1];
    var nav_el = document.getElementById("nav-box");
    var nav_links = nav_el.children;

    var i = 0;
    for (i = 0; i < nav_links.length; i++) {
        var item = nav_links[i];
        if (item.textContent === doc_subtitle) {
            item.className = "current-link";
        }
    }
}

menuBtn.addEventListener("click", function (evt) {
    evt.preventDefault();
    hi_cur_link();
    toggle_menu();
    return false;
}, false);
