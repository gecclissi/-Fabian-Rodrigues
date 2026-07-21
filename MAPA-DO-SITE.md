# 🎩 Mapa do Site — Fabian Rodrigues (Mágico Ilusionista)

Documento gerado durante a **recriação do site**. Ele registra todos os caminhos
(rotas/URLs) percorridos no site original para capturar textos e fotos, quais imagens
foram baixadas e onde cada uma foi reaproveitada no site novo.

- **Site original:** <http://fabianrodrigues.com/> — site em FrontPage com *frames*, no ar desde 1999.
- **Método:** varredura automática (crawler BFS) a partir de `frame.htm`, seguindo todos os links `.htm` internos.
- **Backup integral:** todas as imagens originais foram guardadas, sem alteração, em `assets/img/original/`.

---

## 📊 Resumo da varredura

| Métrica | Valor |
|---|---|
| Páginas percorridas | **90** |
| Arquivos de mídia encontrados | **106** (81 `.jpg`, 24 `.gif`, 1 `.mid`) |
| Baixados com sucesso | **103** |
| Falharam / links mortos (404) | **3** |
| Fotos reais reaproveitadas no site novo | **79** |

### Arquivos que deram erro 404 no site original (não existem mais no servidor)

- `dark014.gif`
- `dark001.gif`
- `Guto2.jpg`

Além desses, alguns **links de páginas** no site original também estão quebrados
(apontam para páginas que não existem mais): `Debis.htm`, `desap-coelho.htm`,
`hen1.htm`–`hen4.htm`, e páginas com acento no nome (`caçarola.htm`,
`quadro-inquebrável.htm`). São defeitos do site antigo, não do novo.

---

## 🧭 Navegação do site original (`frame.htm`)

O menu de frames apontava para estas páginas de conteúdo:

| # | URL original | Conteúdo |
|---|---|---|
| 1 | `inicial.htm` | Início — logo e frase de abertura |
| 2 | `sobre.htm` | Biografia — Conheça o Mr. Fabian |
| 3 | `showmagica.htm` | Shows — Standard e Master |
| 4 | `recentes.htm` | Trabalhos recentes |
| 5 | `clientes.htm` | Clientes atendidos |
| 6 | `fotos.htm` | Fotos — galeria com celebridades e eventos |
| 7 | `numeros.htm` | Baú das Mágicas — índice |
| 8 | `curiosid.htm` | Curiosidades — índice |
| 9 | `humor.htm` | Humor — tirinhas e piadas |
| 10 | `pensamen.htm` | Pensamentos — O Passo do Cavalo Gigante |
| 11 | `tvamsr.htm` | TV / Mídia |
| 12 | `contato.htm` | Contato |

---

## 🗺️ Todas as páginas percorridas (90)

Lista completa de rotas visitadas pelo crawler (URL relativa ao domínio).
Páginas principais têm descrição; as demais são páginas de detalhe de mágicas/ilusões.

| URL original | Descrição |
|---|---|
| `/` (raiz) | Início / Home (redirecionador de frames) |
| `frame.htm` | Frameset de navegação (menu principal) |
| `inicial.htm` | Início — logo e frase de abertura |
| `sobre.htm` | Biografia — Conheça o Mr. Fabian |
| `showmagica.htm` | Shows — Standard e Master |
| `recentes.htm` | Trabalhos recentes |
| `clientes.htm` | Clientes atendidos |
| `fotos.htm` | Fotos — galeria com celebridades e eventos |
| `numeros.htm` | Baú das Mágicas — índice |
| `gdes.htm` | Baú — Grandes Ilusões |
| `magia_geral.htm` | Baú — Magia Geral |
| `magiainfantil.htm` | Baú — Magia Infantil |
| `curiosid.htm` | Curiosidades — índice |
| `ilusoes.htm` | Curiosidades — Ilusões de Óptica |
| `novasilusoes.htm` | Curiosidades — Novas Ilusões de Óptica |
| `historia.htm` | Curiosidades — História da Mágica |
| `desafios.htm` | Curiosidades — Desafios |
| `humor.htm` | Humor — tirinhas e piadas |
| `pensamen.htm` | Pensamentos — O Passo do Cavalo Gigante |
| `tvamsr.htm` | TV / Mídia |
| `contato.htm` | Contato |
| `Buscavida.htm` | página de detalhe (mágica/ilusão/foto) |
| `Caio.htm` | página de detalhe (mágica/ilusão/foto) |
| `Cartanaespada.htm` | página de detalhe (mágica/ilusão/foto) |
| `Clubes.htm` | página de detalhe (mágica/ilusão/foto) |
| `Debis.htm` | página de detalhe (mágica/ilusão/foto) |
| `Escolas.htm` | página de detalhe (mágica/ilusão/foto) |
| `Espada.htm` | página de detalhe (mágica/ilusão/foto) |
| `Gabriela.htm` | página de detalhe (mágica/ilusão/foto) |
| `Grace.htm` | página de detalhe (mágica/ilusão/foto) |
| `Grandesilu.htm` | página de detalhe (mágica/ilusão/foto) |
| `Guilhotina2.htm` | página de detalhe (mágica/ilusão/foto) |
| `Guto.htm` | página de detalhe (mágica/ilusão/foto) |
| `Katia.htm` | página de detalhe (mágica/ilusão/foto) |
| `Luiza.htm` | página de detalhe (mágica/ilusão/foto) |
| `Nicole.htm` | página de detalhe (mágica/ilusão/foto) |
| `Petrosul.htm` | página de detalhe (mágica/ilusão/foto) |
| `adultos.htm` | página de detalhe (mágica/ilusão/foto) |
| `adultos2.htm` | página de detalhe (mágica/ilusão/foto) |
| `aguadonada.htm` | página de detalhe (mágica/ilusão/foto) |
| `beneficente.htm` | página de detalhe (mágica/ilusão/foto) |
| `cacarola.htm` | página de detalhe (mágica/ilusão/foto) |
| `caixa.htm` | página de detalhe (mágica/ilusão/foto) |
| `caixa2.htm` | página de detalhe (mágica/ilusão/foto) |
| `caixada.htm` | página de detalhe (mágica/ilusão/foto) |
| `caçarola.htm` | página de detalhe (mágica/ilusão/foto) |
| `coelhoespremido.htm` | página de detalhe (mágica/ilusão/foto) |
| `coposdotamanho.htm` | página de detalhe (mágica/ilusão/foto) |
| `criancas.htm` | página de detalhe (mágica/ilusão/foto) |
| `criancas2.htm` | página de detalhe (mágica/ilusão/foto) |
| `desap-coelho.htm` | página de detalhe (mágica/ilusão/foto) |
| `dinheiroqueimado.htm` | página de detalhe (mágica/ilusão/foto) |
| `dreembags.htm` | página de detalhe (mágica/ilusão/foto) |
| `espada2.htm` | página de detalhe (mágica/ilusão/foto) |
| `gabine2.htm` | página de detalhe (mágica/ilusão/foto) |
| `gabinete.htm` | página de detalhe (mágica/ilusão/foto) |
| `guilho2.htm` | página de detalhe (mágica/ilusão/foto) |
| `guilhoti.htm` | página de detalhe (mágica/ilusão/foto) |
| `guilhotina3.htm` | página de detalhe (mágica/ilusão/foto) |
| `hen1.htm` | página de detalhe (mágica/ilusão/foto) |
| `hen2.htm` | página de detalhe (mágica/ilusão/foto) |
| `hen3.htm` | página de detalhe (mágica/ilusão/foto) |
| `hen4.htm` | página de detalhe (mágica/ilusão/foto) |
| `henrique.htm` | página de detalhe (mágica/ilusão/foto) |
| `infantis.htm` | página de detalhe (mágica/ilusão/foto) |
| `levita2.htm` | página de detalhe (mágica/ilusão/foto) |
| `levitaca.htm` | página de detalhe (mágica/ilusão/foto) |
| `luvasdiminuintes.htm` | página de detalhe (mágica/ilusão/foto) |
| `master.htm` | página de detalhe (mágica/ilusão/foto) |
| `mosco.htm` | página de detalhe (mágica/ilusão/foto) |
| `pandereta.htm` | página de detalhe (mágica/ilusão/foto) |
| `parasol.htm` | página de detalhe (mágica/ilusão/foto) |
| `plumeiro.htm` | página de detalhe (mágica/ilusão/foto) |
| `pompom.htm` | página de detalhe (mágica/ilusão/foto) |
| `previsaocarta.htm` | página de detalhe (mágica/ilusão/foto) |
| `quadro-inquebravel.htm` | página de detalhe (mágica/ilusão/foto) |
| `quadro-inquebrável.htm` | página de detalhe (mágica/ilusão/foto) |
| `quadro-magico.htm` | página de detalhe (mágica/ilusão/foto) |
| `rece1.htm` | página de detalhe (mágica/ilusão/foto) |
| `rece11.htm` | página de detalhe (mágica/ilusão/foto) |
| `rece12.htm` | página de detalhe (mágica/ilusão/foto) |
| `rece13.htm` | página de detalhe (mágica/ilusão/foto) |
| `rece14.htm` | página de detalhe (mágica/ilusão/foto) |
| `saopedro.htm` | página de detalhe (mágica/ilusão/foto) |
| `sinfoniacores.htm` | página de detalhe (mágica/ilusão/foto) |
| `standard.htm` | página de detalhe (mágica/ilusão/foto) |
| `superbox.htm` | página de detalhe (mágica/ilusão/foto) |
| `superfrog.htm` | página de detalhe (mágica/ilusão/foto) |
| `tigelaarroz.htm` | página de detalhe (mágica/ilusão/foto) |
| `vanishcoke.htm` | página de detalhe (mágica/ilusão/foto) |

---

## 🖼️ Imagens capturadas e onde foram usadas (79)

Cada foto real do site original foi otimizada (máx. 1100 px, qualidade 82) e
reorganizada em pastas por seção dentro de `assets/img/`.

### Início (hero) (1)

| Arquivo original | Novo caminho no site |
|---|---|
| `Foto1.JPG` | `assets/img/hero.jpg` |

### Biografia (3)

| Arquivo original | Novo caminho no site |
|---|---|
| `Biogra1.jpg` | `assets/img/bio/bio-1.jpg` |
| `Biogra2.jpg` | `assets/img/bio/bio-2.jpg` |
| `Biogra3.jpg` | `assets/img/bio/bio-3.jpg` |

### Mágicas (Baú) (25)

| Arquivo original | Novo caminho no site |
|---|---|
| `aguadonada.jpg` | `assets/img/magicas/agua-do-nada.jpg` |
| `Foto18.jpg` | `assets/img/magicas/cacarola.jpg` |
| `Foto4.JPG` | `assets/img/magicas/caixa-misteriosa.jpg` |
| `Espada.jpg` | `assets/img/magicas/carta-na-espada.jpg` |
| `coelhoespremido.jpg` | `assets/img/magicas/coelho-espremido.jpg` |
| `coposdotamanho.jpg` | `assets/img/magicas/copos-diminuintes.jpg` |
| `dinheiroqueimado.jpg` | `assets/img/magicas/dinheiro-queimado.jpg` |
| `dreembags.jpg` | `assets/img/magicas/dreem-bags.jpg` |
| `Foto10.jpg` | `assets/img/magicas/gabinete-espirita.jpg` |
| `vanishcoke.jpg` | `assets/img/magicas/garrafa-coca-cola.jpg` |
| `Foto7.jpg` | `assets/img/magicas/guilhotina.jpg` |
| `Foto9.jpg` | `assets/img/magicas/levitacao.jpg` |
| `luvasdiminuintes.jpg` | `assets/img/magicas/luvas-do-tamanho.jpg` |
| `Foto5.JPG` | `assets/img/magicas/mala-moscovita.jpg` |
| `Foto19.JPG` | `assets/img/magicas/pandereta.jpg` |
| `Foto11.jpg` | `assets/img/magicas/parasol.jpg` |
| `previsaocarta.jpg` | `assets/img/magicas/placa-adivinhacao.jpg` |
| `plumeiro.jpg` | `assets/img/magicas/plumeiro-encantado.jpg` |
| `pompom.jpg` | `assets/img/magicas/pom-pom.jpg` |
| `Foto22.JPG` | `assets/img/magicas/quadro-inquebravel.jpg` |
| `Foto17.JPG` | `assets/img/magicas/quadro-magico.jpg` |
| `sinfoniacores.jpg` | `assets/img/magicas/sinfonia-das-cores.jpg` |
| `superbox.jpg` | `assets/img/magicas/super-box.jpg` |
| `superfrog.jpg` | `assets/img/magicas/super-frog.jpg` |
| `tigelaarroz.jpg` | `assets/img/magicas/tigelas-de-arroz.jpg` |

### Fotos — Com Celebridades (5)

| Arquivo original | Novo caminho no site |
|---|---|
| `Filo.jpg` | `assets/img/celebs/filo.jpg` |
| `Moises.jpg` | `assets/img/celebs/moises.jpg` |
| `Nelson.jpg` | `assets/img/celebs/nelson.jpg` |
| `Serginho1.jpg` | `assets/img/celebs/serginho-1.jpg` |
| `Serginho2.jpg` | `assets/img/celebs/serginho-2.jpg` |

### Fotos — Shows & Eventos (30)

| Arquivo original | Novo caminho no site |
|---|---|
| `Beatr1.jpg` | `assets/img/galeria/beatriz-1.jpg` |
| `Beatr2.jpg` | `assets/img/galeria/beatriz-2.jpg` |
| `Beatr3.jpg` | `assets/img/galeria/beatriz-3.jpg` |
| `Beatr4.jpg` | `assets/img/galeria/beatriz-4.jpg` |
| `Hu.jpg` | `assets/img/galeria/beneficente-1.jpg` |
| `Hu2.jpg` | `assets/img/galeria/beneficente-2.jpg` |
| `Mac.jpg` | `assets/img/galeria/beneficente-mac.jpg` |
| `Foto14.jpg` | `assets/img/galeria/beneficente-show.jpg` |
| `Buscavida1.jpg` | `assets/img/galeria/busca-vida-1.jpg` |
| `Buscavida2.jpg` | `assets/img/galeria/busca-vida-2.jpg` |
| `Buscavida3.jpg` | `assets/img/galeria/busca-vida-3.jpg` |
| `Caio1.jpg` | `assets/img/galeria/caio-1.jpg` |
| `Caio2.jpg` | `assets/img/galeria/caio-2.jpg` |
| `Escola1.jpg` | `assets/img/galeria/escola-1.jpg` |
| `Escola2.jpg` | `assets/img/galeria/escola-2.jpg` |
| `Filipe.jpg` | `assets/img/galeria/filipe.jpg` |
| `Gabriela1.jpg` | `assets/img/galeria/gabriela-1.jpg` |
| `Gabriela2.jpg` | `assets/img/galeria/gabriela-2.jpg` |
| `Grace.jpg` | `assets/img/galeria/grace.jpg` |
| `Guto1.jpg` | `assets/img/galeria/guto-1.jpg` |
| `katia.jpg` | `assets/img/galeria/katia-ketelin.jpg` |
| `Luiza1.jpg` | `assets/img/galeria/luiza-1.jpg` |
| `Luiza2.jpg` | `assets/img/galeria/luiza-2.jpg` |
| `Nicole1.jpg` | `assets/img/galeria/nicole-1.jpg` |
| `Nicole2.jpg` | `assets/img/galeria/nicole-2.jpg` |
| `Petro01.jpg` | `assets/img/galeria/petro-sul-1.jpg` |
| `Petro02.jpg` | `assets/img/galeria/petro-sul-2.jpg` |
| `proaudi.jpg` | `assets/img/galeria/proaudi.jpg` |
| `Adultos.jpg` | `assets/img/galeria/show-adultos.jpg` |
| `saopedro.jpg` | `assets/img/galeria/spa-sao-pedro.jpg` |

### Curiosidades — Ilusões de Óptica (13)

| Arquivo original | Novo caminho no site |
|---|---|
| `fig1.jpg` | `assets/img/ilusoes/ilusao-1.jpg` |
| `fig2.jpg` | `assets/img/ilusoes/ilusao-2.jpg` |
| `fig3.jpg` | `assets/img/ilusoes/ilusao-3.jpg` |
| `fig4.jpg` | `assets/img/ilusoes/ilusao-4.jpg` |
| `fig5.jpg` | `assets/img/ilusoes/ilusao-5.jpg` |
| `fig6.jpg` | `assets/img/ilusoes/ilusao-6.jpg` |
| `fig7.jpg` | `assets/img/ilusoes/ilusao-7.jpg` |
| `image002.jpg` | `assets/img/ilusoes/nova-1.jpg` |
| `image004.jpg` | `assets/img/ilusoes/nova-2.jpg` |
| `image006.jpg` | `assets/img/ilusoes/nova-3.jpg` |
| `image008.jpg` | `assets/img/ilusoes/nova-4.jpg` |
| `image012.jpg` | `assets/img/ilusoes/nova-5.jpg` |
| `image014.jpg` | `assets/img/ilusoes/nova-6.jpg` |

### Curiosidades — Humor (2)

| Arquivo original | Novo caminho no site |
|---|---|
| `Humor1.jpg` | `assets/img/humor/humor-1.jpg` |
| `Humor2.jpg` | `assets/img/humor/humor-2.jpg` |

---

## 🧩 Como o conteúdo foi remontado no site novo

O site novo é uma **single-page** responsiva. Cada seção corresponde a páginas do site antigo:

| Seção nova | Vem de (site original) |
|---|---|
| Início (hero) | `inicial.htm` + `Foto1.JPG` |
| Biografia | `sobre.htm` + fotos `Biogra1-3` |
| Shows (Standard/Master) | `showmagica.htm` |
| **Mágicas** (abas: Grandes Ilusões / Magia Geral / Magia Infantil) | `numeros.htm`, `gdes.htm`, `magia_geral.htm`, `magiainfantil.htm` + páginas de detalhe |
| **Fotos** (Celebridades / Shows / Eventos) | `fotos.htm` e páginas de fotos |
| **Curiosidades** (abas: Ilusões / Humor / Pensamentos / História) | `curiosid.htm`, `ilusoes.htm`, `novasilusoes.htm`, `humor.htm`, `pensamen.htm`, `historia.htm` |
| Clientes | `clientes.htm` |
| Contato | `contato.htm` |

---

## 🔧 Observações técnicas

- O site original usa codificação **windows-1252**; textos foram reescritos em PT-BR limpo.
- As legendas das tirinhas de humor já vêm embutidas nas próprias imagens.
- Arquivos **decorativos** do site antigo (gifs de fundo, linhas, ícones, `.mid` de música)
  foram propositalmente descartados por serem datados; apenas as **fotos reais** foram mantidas.
- Backup intacto das 102 imagens originais em `assets/img/original/` (não usado em produção).
