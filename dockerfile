FROM node:18.17.0
 
WORKDIR /app

RUN npm install -g npm@10.5.0

COPY ./package.json ./
COPY ./yarn.lock ./
COPY ./prisma ./

RUN yarn --frozen-lockfile
RUN npx prisma generate

CMD ["yarn", "run", "dev"]