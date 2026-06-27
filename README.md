# deno desktop test

Deno 2.9が出てWebViewを利用したネイティブアプリが作れるようになったとのことなのでテスト。

https://deno.com/blog/v2.9#deno-desktop

## コマンド

* `deno task build`
* `deno task start`
  * ビルド後に実行可能（batの代わり）

## ドキュメント

https://docs.deno.com/runtime/reference/cli/desktop/

Denoのフラグを指定しないとファイル読み書きなどできないが、読み込めない場合のログなどが一切出力されないので注意

また `denoi.json` に色々設定を追加できる。
