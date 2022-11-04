FROM node:14

WORKDIR /app

COPY package*.json ./

RUN yarn install --force

COPY . /app

RUN yarn build

CMD ["yarn", "start"]