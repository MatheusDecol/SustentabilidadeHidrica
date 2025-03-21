function toggleMenu() {
  let sidebar = document.getElementById("sidebar");
  if (sidebar.style.right === "0px") {
      sidebar.style.right = "-25rem";
  } else {
      sidebar.style.right = "0px";
  }
}

document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
      let sidebar = document.getElementById("sidebar");
      if (sidebar.style.right === "0rem") {
          sidebar.style.right = "-25rem";
      }
  }
});