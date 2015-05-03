kintone plugin template
===================

概要
------------

サイボウズの [kintone](https://kintone.cybozu.com/jp/) Plugin開発のテンプレート.

インストール
------------

### Nodeのインストール

[Node.js](http://nodejs.org/)をインストールしておく必要がある.

#### Mac

``` {.bash}
  brew install node
```

brewを使っていない場合は, [これ](http://qiita.com/is0me/items/475fdbc4d770534f9ef1)
とかを参考にインストールしてください.

[nodebrew](https://github.com/hokaccha/nodebrew)を使ってバージョン管理を行いたい場合は,
[ここ](http://qiita.com/Kackey/items/b41b11bcf1c0b0d76149#mac%E7%B7%A8)とかを参考に
してください.

#### Windows

WindowsでNode.jsを利用する場合, [nodist](https://github.com/marcelklehr/nodist)が便
利です[これ](http://qiita.com/Kackey/items/b41b11bcf1c0b0d76149#windows%E7%B7%A8)
とかを参考にインストールしてください.
インストール後は, 以下のコマンドでnodeのバージョンをv0.12.0にしてください.

``` {.bash}
  nodist + v0.12.0
  nodist v0.12.0
```

※Windowsの場合, node-sassのインストールでエラーが起きる場合があります.
node-sassを先にインストールしてからnpm installすると解決する場合があります.

### 依存ライブラリのインストール

依存ライブラリは npm を用いて管理されている.

``` {.bash}
  npm install
```

以上で依存ライブラリがインストールされる.


### 主な利用ライブラリ

主に以下のライブラリを利用している.

- [CoffeeScript](http://coffeescript.org/)
- [Gulp](http://gulpjs.com/)
- [Browserify](http://browserify.org/)


使い方
------------

### 初期設定

新規開発の場合は, １度ビルドする必要がある

``` {.bash}
  npm run build
```

以下のconfigファイルを編集する必要がある.

```
    src/print-creator/config.coffee
```

pluginKeyに, 生成されたppkファイルのパスを指定する.

既存プラグインの場合は, ppkファイルをプロジェクト配下に置き, そのパスを指定する

### JavaScriptやSASSのビルド

Gulp タスクが幾つか用意されている.

#### ビルド

ビルドするためには

``` {.bash}
  npm run build
```

を実行する. これを実行する前に `npm install` を行って依存ライブラリが正しくインストールして
おく必要がある.

ビルド元ファイルは `src` 以下にある. ビルド後のファイルは基本的に `web` 以下に出力される.

#### Watch

開発時に, ファイルの変更を検知して, ビルド + ライブリロードなどといったことを自動的に行ってく
れるタスクが用意されている.

監視プロセスを立ち上げるためには以下のコマンドを実行する.

``` {.bash}
  npm run watch
```

ライセンス
------------

MIT