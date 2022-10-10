FROM node:16-alpine AS builder

WORKDIR /app

COPY . ./

RUN npm install -g react-scripts && npm ci --production && npm run build

FROM node:16-alpine

COPY --from=builder ./app/build ./app/build
COPY --from=builder ./app/deploy ./app

USER 0
WORKDIR /app
RUN npm install
USER 1001
CMD ["node", "server.js"]
