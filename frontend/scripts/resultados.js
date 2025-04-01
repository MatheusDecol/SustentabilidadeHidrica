function toggleMenu() {
  let sidebar = document.getElementById("sidebar");
  if (sidebar.style.right === "0rem") {
      sidebar.style.right = "-25rem";
  } else {
      sidebar.style.right = "0rem";
  }
}