/* ==========================
   SABORFEST - SCRIPT PRINCIPAL
   ========================== */

// Função para processar a compra e redirecionar para página de pagamento
document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const tipo = params.get("tipo");

  if (tipo) {
    const tipoInput = document.getElementById("tipo");
    if (tipoInput) tipoInput.value = tipo;
  }

  const form = document.getElementById("formPagamento");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const nome = document.getElementById("nome").value.trim();
      const email = document.getElementById("email").value.trim();
      const tipo = document.getElementById("tipo").value;
      const comprovativo = document.getElementById("comprovativo").value;

      if (!nome || !email || !tipo || !comprovativo) {
        alert("Por favor, preencha todos os campos e anexe o comprovativo.");
        return;
      }

      // Simula envio de dados
      alert(`✅ Obrigado, ${nome}! O seu pedido foi recebido.
Envie o comprovativo para sabordealvercafest@gmail.com.
Após confirmação, receberá o QR Code por e-mail.`);

      form.reset();
    });
  }
});

/* ==========================
   ADMIN / CHECK-IN
   ========================== */

// Simulação de validação de QR code no check-in
function validarQRCode() {
  const codigo = document.getElementById("codigoQR").value.trim();
  const resultado = document.getElementById("resultado");

  if (codigo === "") {
    resultado.textContent = "⚠️ Introduza um código QR válido.";
    resultado.style.color = "orange";
    return;
  }

  // Apenas simula a validação (pode ser substituído por base de dados real no futuro)
  if (codigo.startsWith("SABORFEST-")) {
    resultado.textContent = "✅ Bilhete válido! Entrada autorizada.";
    resultado.style.color = "lightgreen";
  } else {
    resultado.textContent = "❌ Código inválido!";
    resultado.style.color = "red";
  }
}
