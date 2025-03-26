function exibirModal() {
  document.getElementById("popup").style.display = "flex";
}

function fecharModal() {
  document.getElementById("popup").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function() {
  
  document.getElementById("contactBtn").addEventListener("click", function(event) {
    event.preventDefault();
    exibirModal();
  });

  document.getElementById("closePopup").addEventListener("click", function() {
    fecharModal();
  });

  document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
      fecharModal();
    }
  });

});

function toggleMenu() {
  let sidebar = document.getElementById("sidebar");
  if (sidebar.style.right === "0rem") {
      sidebar.style.right = "-25rem";
  } else {
      sidebar.style.right = "0rem";
  }
}