# 🌱 ONG Felicidades — Projeto Acadêmico

Site institucional da **ONG Felicidades**, desenvolvido como parte das entregas práticas do curso.  
Este projeto tem como foco **interatividade, acessibilidade e deploy profissional**, seguindo as normas da **WCAG 2.1 Nível AA**.

---

## 🚀 Entregas e Objetivos

### 🧩 Entrega III — Interatividade e Validação
- Implementação de **SPA (Single Page Application)** via `app.js`
- Sistema de **templates dinâmicos** em JavaScript
- **Validação de formulários** com regras específicas (CPF, CEP, e-mail, etc)
- **Armazenamento local** com `localStorage`
- Estrutura modular: `app.js`, `validation.js`, `storage.js`

### 🧠 Entrega IV — Versionamento, Acessibilidade e Deploy
- Fluxo **GitFlow** implementado (`main`, `develop`, `feature/*`, `release/*`)
- Histórico de commits **semântico e organizado**
- **Navegação por teclado** e foco visível
- **Estrutura semântica HTML5** completa (`header`, `main`, `nav`, `footer`)
- **Suporte a leitores de tela** com `aria-labels` e `role` apropriados
- **Contraste de cores mínimo 4.5:1**
- **Minificação e compressão** de HTML, CSS, JS e imagens para deploy

---

## 🏗️ Estrutura do Projeto

```

/ong
├── assets/
│   ├── images/
│   └── icons/
├── css/
│   ├── main.css
│   ├── forms.css
│   └── variables.css
├── js/
│   ├── app.js
│   ├── validation.js
│   ├── storage.js
│   ├── menu.js
│   └── mask.js
├── index.html
├── cadastro.html
├── projetos.html
├── README.md
└── package.json

````

---

## 💡 Tecnologias Utilizadas

- **HTML5** — Estrutura semântica e acessível  
- **CSS3** — Design responsivo e contraste ajustado  
- **JavaScript (ES6)** — Interatividade e manipulação de DOM  
- **Git / GitHub** — Versionamento (GitFlow + commits semânticos) 

---

## 🔧 Como Executar o Projeto Localmente

### 1️⃣ Clonar o repositório

```bash
git clone https://github.com/pavelixo/ong.git
cd ong
````

### 2️⃣ Rodar em servidor local (simples)

```bash
python3 -m http.server 8000
# Acesse: http://localhost:8000
```

---


## 🦮 Acessibilidade (WCAG 2.1 AA)

* Todos os formulários com `label` e `aria-describedby`
* Elementos interativos com foco e `tabindex`
* Estrutura semântica com `<header>`, `<main>`, `<nav>`, `<footer>`
* Navegação 100% via teclado
* Mensagens de erro legíveis por leitores de tela (`role="alert"`)
* Contraste mínimo garantido (`>= 4.5:1`)

---

Acesse:
👉 [https://pavelixo.github.io/ong/](https://pavelixo.github.io/ong/)

---

## 📜 Licença

Este projeto é de uso acadêmico e livre para fins educacionais.

---

## 🧾 Checklist Final

✅ Estrutura GitFlow implementada
✅ Commits semânticos e organizados
✅ Acessibilidade WCAG 2.1 AA
✅ Minificação e compressão de produção
✅ Documentação técnica completa (README.md)
✅ Repositório público no GitHub
