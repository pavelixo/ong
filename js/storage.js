document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  if (!form) return;

  const saved = JSON.parse(localStorage.getItem("cadastro"));
  if (saved) {
    for (const [key, value] of Object.entries(saved)) {
      const field = form.elements[key];
      if (field) field.value = value;
    }
  }

  // Salvar a cada mudança
  form.addEventListener("input", () => {
    const data = Object.fromEntries(new FormData(form).entries());
    localStorage.setItem("cadastro", JSON.stringify(data));
  });
});
