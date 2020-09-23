import nav_menu from "./data/nav_menu";

function switchActiveClass(classNameToSelect, className, activeElement) {
  let elements = document.querySelectorAll(classNameToSelect);

  for (let i = 0; i < elements.length; i++) {
    elements[i].classList.remove(className);
  }
  activeElement.parentNode.classList.add(className);

  const el = document.getElementById("content_container");
  el.innerHTML = nav_menu[activeElement.id];
}

window.onload = function () {
  for (let i = 0; i < Object.keys(nav_menu).length; i++) {
    let key = Object.keys(nav_menu)[i];
    document.getElementById(key).addEventListener("click", function (e) {
      switchActiveClass("#navbarNav .nav-item", "active", e.target);
    });

    //set default to the first sub-menu
    const first_key = Object.keys(nav_menu)[0];
    switchActiveClass(
      "#navbarNav .nav-item",
      "active",
      document.getElementById(first_key)
    );
  }
};
