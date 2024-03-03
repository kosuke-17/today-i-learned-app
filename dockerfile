FROM node:latest

WORKDIR /app

COPY package.json .
COPY prisma ./prisma

RUN yarn

COPY . .

RUN yarn build

CMD ["yarn", "start"]
