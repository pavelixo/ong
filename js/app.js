document.addEventListener("DOMContentLoaded", () => {
  const main = document.querySelector("#main");

    async function loadPage(url, title) {
    try {
        const response = await fetch(url);
        const html = await response.text();

        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");

        const newContent = doc.querySelector("main");
        main.innerHTML = newContent ? newContent.innerHTML : html;

        document.title = title;

        window.scrollTo(0, 0);
    } catch (err) {
        main.innerHTML = `<p class="alert alert-danger">Erro ao carregar o conteúdo.</p>`;
        console.error(err);
    }
    }


  document.body.addEventListener("click", (e) => {
    const link = e.target.closest("a");
    if (!link || link.target === "_blank" || link.href.startsWith("mailto:")) return;

    const href = link.getAttribute("href");
    if (href.endsWith(".html")) {
      e.preventDefault();

      if (href.includes("cadastro")) {
        loadPage("cadastro.html", "Cadastro — Voluntário | ONG Felicidades");
      } else if (href.includes("projetos")) {
        loadPage("projetos.html", "Projetos Sociais | ONG Felicidades");
      } else {
        loadPage("index.html", "ONG Felicidades — Transformando Comunidades");
      }
    }
  });

  function createCard(title, text) {
    return `
      <article class="card">
        <h3>${title}</h3>
        <p>${text}</p>
      </article>
    `;
  }

  const container = document.querySelector(".section-cards");
  if (container) {
    container.innerHTML = `
      ${createCard("Projeto Educação", "Oficinas para alfabetização de jovens e adultos.")}
      ${createCard("Projeto Saúde", "Campanhas de saúde preventiva em comunidades.")}
      ${createCard("Projeto Meio Ambiente", "Mutirões de reflorestamento e educação ambiental.")}
    `;
  }
});
