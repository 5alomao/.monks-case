function generateRandomNumbers() {
  const num1 = Math.floor(Math.random() * 1000);
  const num2 = Math.floor(Math.random() * 1000);

  document.getElementById("num1").textContent = num1;
  document.getElementById("num2").textContent = num2;
}

window.onload = generateRandomNumbers;

const submitBtn = document.getElementById("submit-btn");

submitBtn.addEventListener("click", function (event) {
  event.preventDefault();

  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const result = document.getElementById("result").value.trim();

  const num1 = parseInt(document.getElementById("num1").textContent);
  const num2 = parseInt(document.getElementById("num2").textContent);

  const correctResult = num1 + num2;

  if (!firstName || !lastName || !result) {
    showAlert("Por favor, preencha os campos obrigatórios", "error");
    if (!firstName) {
      document.getElementById("firstName").focus();
    } else if (!lastName) {
      document.getElementById("lastName").focus();
    } else if (!result) {
      document.getElementById("result").focus();
    }
  } else if (parseInt(result) !== correctResult) {
    showAlert("O resultado está incorreto. Tente novamente!", "error");
    document.getElementById("result").focus();
  } else {
    showAlert(
      `Olá, ${firstName}! <br> Sua verificação foi efetuada com sucesso!`,
      "success"
    );
  }
});

function showAlert(message, type) {
  const alertElement = document.getElementById("custom-alert");
  const alertMessage = document.getElementById("alert-message");

  alertMessage.innerHTML = message;

  alertElement.classList.remove("success", "error", "hide");
  alertElement.classList.add(type);

  alertElement.classList.add("show");

  setTimeout(() => {
    alertElement.classList.remove("show");
    alertElement.classList.add("hide");
  }, 3000);
}
