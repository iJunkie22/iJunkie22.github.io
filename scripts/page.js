function toggle_menu() {
    var nav_el = document.getElementById("nav-box");
    var nav_style = window.getComputedStyle(nav_el, null);
    var display_state = nav_style.getPropertyValue("display");
    var d_s_basename = display_state.substr(-4);

    switch (d_s_basename) {
        case "none":
            nav_el.style.display = "-webkit-flex";
            nav_el.style.display = "flex";
            break
        case "flex":
            nav_el.style.display = "none";
            break;
    }
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
