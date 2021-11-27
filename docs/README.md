# Introduction

とりあえずのmemo


nuxt project作成履歴

```sh
create-nuxt-app v3.7.1
✨  Generating Nuxt.js project in youtube-manager-ui
? Project name: youtube-manager-ui
? Programming language: TypeScript
? Package manager: Yarn
? UI framework: None
? Nuxt.js modules: Axios - Promise based HTTP client
? Linting tools: ESLint, Prettier
? Testing framework: Jest
? Rendering mode: Universal (SSR / SSG)
? Deployment target: Server (Node.js hosting)
? Development tools: (Press <space> to select, <a> to toggle all, <i> to invert selection)
? Continuous integration: GitHub Actions (GitHub only)
? What is your GitHub username? naohito-t
? Version control system: Git
```

---

nuxtでの作成されたフォルダをいじる

.gitファルダを削除
.githubディレクトリを一階層上にする。
git initをルートに設定
nuxt.config.jsをnuxt.config.tsに変更
srcディレクトリを作成
srcディレクトリ配下にすべてまとめる
jest.configをtsに変更

- tsconfig
tsconfig.jsonのbaseUrlをsrcにする
typeRootで自作@typesディレクトリを作成しみに行く。


---

composition api Setup

`$ yarn add @nuxtjs/composition-api`

導入後、nuxt.config.tsに以下を追記

```ts
buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/composition-api/module'
  ],
```

index.vueをcomposition api仕様に変更
動作確認

---

ts環境を強化する

`$ yarn add @nuxt/typescript-runtime`

RUNTIME中でもTSを実行させるモジュールインストール

package.jsonのnuxtコマンドをnuxt-tsに変更する。

cross-envをインストール(windowsとmacで動作ができるため)
`$ yarn add cross-env@^7.0.3`

package.jsonを編集。

```json
"dev": "cross-env NODE_ENV=\"local\" nuxt-ts",
"stg": "cross-env NODE_ENV=\"stg\" nuxt-ts",
"pro": "cross-env NODE_ENV=\"pro\" nuxt-ts",
```

dotenv install
`$ yarn add @nuxtjs/dotenv@^1.4.1`
