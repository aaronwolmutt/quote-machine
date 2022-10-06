FROM node:16-alpine AS builder

WORKDIR /app

COPY . ./

RUN npm install -g react-scripts && npm ci --production && npm run build

FROM node:16

COPY --from=builder ./app/build ./app/build
COPY --from=builder ./app/deploy/server.js ./app

USER 0
RUN npm install --global express

USER 100
WORKDIR /app
CMD ["node server.js"]
