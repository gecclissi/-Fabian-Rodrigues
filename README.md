# 🎩 Fabian Rodrigues — Mágico Ilusionista

Site institucional moderno, responsivo e estático do mágico **Fabian Rodrigues**,
recriado a partir do site original (no ar desde 1999) e totalmente atualizado.

> "A magia da vida está em acreditar que tudo é possível."

## ✨ O que tem no site

- **Página única** (single-page) com rolagem suave e menu fixo
- Seções: Início, Biografia, Shows (Standard e Master), Baú das Mágicas, Fotos, Clientes e Contato
- **100% responsivo** (celular, tablet e desktop) com menu hambúrguer no mobile
- Tema escuro elegante com paleta de **magia (roxo + dourado)**
- **Galeria com lightbox** (clique nas fotos para ampliar; navegação por teclado)
- **Botão flutuante do WhatsApp** e formulário que já abre o WhatsApp com a mensagem pronta
- Animações leves de entrada (reveal on scroll)
- Otimizado para **SEO** (título, descrição, Open Graph, `sitemap.xml`, `robots.txt`) e favicon próprio

## 📁 Estrutura

```
.
├── index.html            # página principal
├── favicon.ico
├── robots.txt
├── sitemap.xml
├── .nojekyll             # evita processamento Jekyll no GitHub Pages
└── assets/
    ├── css/styles.css
    ├── js/main.js
    └── img/
        ├── logo.gif, favicon.png
        ├── fabian-palco.jpg, serginho*.jpg, nelson.jpg, moises.jpg, filo.jpg, bio-*.jpg
        └── original/     # imagens originais baixadas do site antigo (backup)
```

> A pasta `assets/img/original/` guarda **todas as imagens capturadas do site antigo**
> (fotos, logos e GIFs) como backup. As imagens usadas no site novo estão em `assets/img/`
> com nomes limpos e otimizadas.

## 🚀 Como publicar no GitHub Pages

1. Crie um repositório no GitHub (ex.: `site-fabian`).
2. Envie estes arquivos para o repositório:
   ```bash
   git init
   git add .
   git commit -m "Site Fabian Rodrigues - Mágico Ilusionista"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
   git push -u origin main
   ```
3. No GitHub, vá em **Settings → Pages**.
4. Em **Build and deployment → Source**, escolha **Deploy from a branch**.
5. Selecione a branch **main** e a pasta **/ (root)** e clique em **Save**.
6. Aguarde 1–2 minutos. O site ficará disponível em:
   `https://SEU-USUARIO.github.io/SEU-REPOSITORIO/`

### 🌐 Usar o domínio próprio (fabianrodrigues.com) — opcional

1. Em **Settings → Pages → Custom domain**, digite `fabianrodrigues.com` e salve
   (isso cria um arquivo `CNAME` no repositório).
2. No seu provedor de domínio, aponte o DNS para o GitHub Pages:
   - Registros **A** para `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - Ou um registro **CNAME** de `www` para `SEU-USUARIO.github.io`
3. Marque **Enforce HTTPS** quando o certificado for emitido.

## 🛠️ Testar localmente

Basta abrir o `index.html` no navegador. Para testar como servidor (recomendado):

```bash
# Python 3
python -m http.server 8000
# depois acesse http://localhost:8000
```

## ✏️ Como atualizar o conteúdo

- **Telefones / e-mail:** procure por `5519997923480`, `3016-7032` e `magico@fabianrodrigues.com` no `index.html`.
- **Clientes:** edite a lista `<ul class="clients-grid">` no `index.html`.
- **Fotos:** troque os arquivos em `assets/img/` mantendo os mesmos nomes, ou adicione novos `<figure class="gallery-item">` na seção de galeria.
- **Cores do tema:** ajuste as variáveis no topo de `assets/css/styles.css` (`--gold`, `--purple`, etc.).

---

📞 (19) 3016-7032 · 📱 (19) 99792-3480 · ✉️ magico@fabianrodrigues.com
