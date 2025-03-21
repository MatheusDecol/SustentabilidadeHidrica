function toggleModal(id) {
  let modal = document.getElementById(id);
  if (modal.style.display === "flex") {
      modal.style.display = "none";
  } else {
      modal.style.display = "flex";
  }
}

document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    let modals = document.querySelectorAll(".modal");
    modals.forEach(modal => {
      modal.style.display = "none";
    });
  }
});

function toggleMenu() {
  let sidebar = document.getElementById("sidebar");
  if (sidebar.style.right === "0rem") {
      sidebar.style.right = "-25rem";
  } else {
      sidebar.style.right = "0rem";
  }
}