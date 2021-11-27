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

- tsconfig
tsconfig.jsonのbaseUrlをsrcにする
typeRootで自作@typesディレクトリを作成しみに行く。


---
