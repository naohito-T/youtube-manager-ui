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
NuxtのTS回りのNPMがいくつかに分解されました。
そのうち、@nuxt/typescript-runtimeはNode環境でTSを処理するためのものです。
具体的にはnuxt.configやserverMiddlewaresでTSを使いたいときに必要になります。
ちなみに@nuxt/typescript-runtimeはProduction環境(NODE_ENV=production)でも必要になるので、dependenciesに追加する必要があります。
(nuxt-ts startで使用するので)


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

nuxt buildでTSを扱うためのものが@nuxt/typescript-buildです。
@nuxt/typescriptは@nuxt/typescript-buildに含まれるようになったので直接の依存は不要になります。
@nuxt/typescript-buildはnuxt buildなどで使うだけなのでRuntimeとは違い、devDependenciesとして追加します。
@nuxt/typescriptがRuntimeとに分離されて使いやすくなった感じですね。

`$ yarn add -D @nuxt/typescript-build@^2.1.0 `

---

- sass
NuxtでSassを使うにはnode-sass、sass-loader2種類のパッケージが必要
@nuxtjs/style-resourcesは変数を使用したい場合に使う。

`$ yarn add -D node-sass@^6.0.1  sass-loader@10.1.1 @nuxtjs/style-resources@^1.2.0`

nuxt.config.tsに以下を記載する。

```ts
modules: ['@nuxtjs/style-resources'],
```

---

- バンドルサイズ確認
Webpack Bundle Analyzerを利用すると、バンドルサイズを可視化できます。可視化することで「容量の大きいモジュールの把握」「複数ページで共通モジュールを保持してないかの確認」といった分析がしやすくなります。

package.jsonのscriptに以下を追加

```json
"analyze": "nuxt-ts build --analyze",
```

---





---

- Vuexのデータフロー
VueComponents→Actions→Mutations→State→VueComponentsとなる。




