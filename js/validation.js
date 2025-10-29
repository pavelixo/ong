document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = form.nome.value.trim();
    const email = form.email.value.trim();
    const cpf = form.cpf.value.trim();
    const telefone = form.telefone.value.trim();
    const nascimento = form.nascimento.value.trim();
    const cep = form.cep.value.trim();
    const endereco = form.endereco.value.trim();
    const cidade = form.cidade.value.trim();
    const estado = form.estado.value.trim();
    const sobre = form.sobre.value.trim();

    if (nome.length < 3) return alert("O nome precisa ter pelo menos 3 caracteres.");
    if (!email.includes("@")) return alert("Informe um e-mail válido.");
    if (!/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf)) return alert("CPF inválido. Use o formato 000.000.000-00.");
    if (!/\(\d{2}\)\s\d{4,5}-\d{4}/.test(telefone)) return alert("Telefone inválido. Use o formato (00) 90000-0000.");
    if (!cep.match(/^\d{5}-\d{3}$/)) return alert("CEP inválido.");
    if (endereco.length < 5) return alert("Informe um endereço completo.");
    if (cidade.length < 3) return alert("Informe uma cidade válida.");
    if (!estado) return alert("Selecione um estado.");
    if (sobre.length < 10) return alert("Descreva melhor suas motivações.");

    alert("✅ Cadastro enviado com sucesso!");
    form.reset();
    localStorage.removeItem("cadastro");
  });
});
