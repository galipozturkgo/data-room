FROM docker.io/node:lts-alpine

ENV HOST=0.0.0.0

ENV PORT=3000

ENV NODE_ENV=production

WORKDIR /app

COPY package.json .

COPY package-lock.json .

RUN npm ci --omit=dev

COPY apps/api/dist .

CMD [ "node", "main" ]
