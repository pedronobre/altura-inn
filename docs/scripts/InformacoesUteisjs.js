//dropdown
function menu() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick= function(event) {
  if (!event.target.matches('.botaomenu')) {

    let dropdowns = document.getElementsByClassName("dropdown-content")
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}