## セットアップ

以下のコマンドを実行してセットアップ

- docker compose up -d
- docker exec -it til-app bash
  <!-- til-appコンテナ内で実行 -->
  - npx prisma migrate dev
