
document.getElementById("login-btn").addEventListener("click", function (e) { e.preventDefault();

const usuario = document.getElementById("usuario").value;
 const senha = document.getElementById("senha").value;
 const codigo = document.getElementById("codigo").value;

 // Dados de acesso válidos (exemplo)
const usuarioValido = "admin";
 const senhaValida = "1234";
 const codigoValido = "Tplink2025";
 if (usuario === usuarioValido && senha === senhaValida && codigo === codigoValido) {
 window.location.href = "painel.html";
 } else {
 alert("Acesso negado. Verifique os dados e tente novamente.");
 }
});
