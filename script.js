// script.js
function enviarFormulario(event) {
  event.preventDefault();
  const emailInput = document.getElementById("email");
  const email = emailInput.value;

  // Lógica para enviar o formulário ou processar os dados
  const dadosFormulario = {
    email: email,
    //Outros campos do formulário
  };

  // Simulação do envio do formulário
  console.log("Dados do formulário:", dadosFormulario);

  // Exemplo de exibição de mensagem de sucesso
  alert(`Formulário enviado com sucesso para o e-mail: ${email}`);
  emailInput.value = "";
}
