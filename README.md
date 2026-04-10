# App Sociedade de Canto Lyra

Aplicativo mobile da Sociedade de Canto Lyra, desenvolvido com Ionic e Angular. O app possui **área pública** (usuários) e **área administrativa** (login para administradores).

## Tecnologias

- **Ionic** – Framework para aplicativos híbridos
- **Angular** – Framework front-end
- **TypeScript**
- **Angular Material** – Componentes para a área administrativa
- **Capacitor** – Build e execução em dispositivos nativos (Android/iOS)

## Pré-requisitos

- **Node.js** 18+ (recomendado LTS)
- **npm** (incluído com o Node.js)
- **Ionic CLI** (instalação global): `npm install -g @ionic/cli`
- **Android Studio** (opcional) – para build e emulador Android

## Como rodar o projeto

### Instalação

```bash
cd lyra-app
npm install
```

### Desenvolvimento (navegador)

```bash
ionic serve
```

O app estará disponível em `http://localhost:8100`.

### Build para produção

```bash
ionic build
```

### Dispositivo móvel (Android)

Após alterações no código web:

```bash
ionic build
npx cap sync
npx cap open android
```

Abra o projeto no Android Studio e execute no emulador ou dispositivo.

## Comandos principais


| Comando                           | Descrição                                       |
| --------------------------------- | ----------------------------------------------- |
| `ionic serve`                     | Sobe o app em modo desenvolvimento no navegador |
| `ionic build`                     | Gera o build de produção na pasta `www/`        |
| `npx cap sync`                    | Sincroniza o conteúdo web com o projeto nativo  |
| `npx cap add android`             | Adiciona a plataforma Android (já configurado)  |
| `ng generate component path/name` | Gera novo componente Angular                    |


## Estrutura do projeto

- `**src/app/shared**` – Componentes e dados reutilizáveis
- `**src/app/pages/public**` – Telas da área pública (home, notícias, eventos, contato, associar)
- `**src/app/pages/admin**` – Telas da área administrativa (login, dashboard, gestão de notícias e eventos)

## Licença

Projeto interno da Sociedade de Canto Lyra.