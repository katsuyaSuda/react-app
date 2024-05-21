# ベースイメージの指定
FROM node:22-alpine

# ./(PROJECT_ROOT以下)をイメージのファイルシステム上の/frontにコピー
COPY ./ /front
# コマンドを実行する場所として使う作業ディレクトリ
WORKDIR /front
# パッケージをインストール
RUN npm install
#　localhost:3000で起動
EXPOSE 3000
ENV CI true
CMD npm start