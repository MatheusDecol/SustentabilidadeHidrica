function calcularEconomia() {
 
  let consumoDiario = document.getElementById("consumo").value;
  
  
  if (consumoDiario === "" || consumoDiario <= 0) {
      document.getElementById("resultado").innerHTML = "Por favor, insira um valor válido para o consumo diário.";
      return;
  }
  
  consumoDiario = parseFloat(consumoDiario);
  
  
  let consumoMensal = consumoDiario * 30;
  let consumoAnual = consumoDiario * 365;
  
  let economiaMensal = consumoMensal * 0.3;
  let economiaAnual = consumoAnual * 0.3;
  

  document.getElementById("resultado").innerHTML = `
      <strong>Consumo Mensal:</strong> ${consumoMensal.toFixed(2)} litros<br>
      <strong>Consumo Anual:</strong> ${consumoAnual.toFixed(2)} litros<br>
      <strong>Possível Economia Mensal:</strong> ${economiaMensal.toFixed(2)} litros<br>
      <strong>Possível Economia Anual:</strong> ${economiaAnual.toFixed(2)} litros
  `;
}

function limparCampos() {
  document.getElementById("consumo").value = "";
  document.getElementById("resultado").innerHTML = "";
}

function toggleMenu() {
  let sidebar = document.getElementById("sidebar");
  if (sidebar.style.right === "0rem") {
      sidebar.style.right = "-25rem";
  } else {
      sidebar.style.right = "0rem";
  }
}