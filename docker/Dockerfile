FROM node:20.11
WORKDIR /usr/apps/express-template

COPY package.json yarn.lock ./
RUN yarn install

COPY . .

RUN yarn prisma:generate

RUN yarn build

CMD ["yarn", "start"]
