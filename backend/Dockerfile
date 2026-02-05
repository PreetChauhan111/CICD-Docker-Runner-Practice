FROM node:18-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY server.js ./

RUN addgroup -g 1001 -S appgroup \
 && adduser -u 1001 -S appuser -G appgroup

FROM node:18-alpine AS production
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install --production

COPY server.js ./

RUN apk add --no-cache curl \
 && addgroup -S appgroup \
 && adduser -S appuser -G appgroup

USER appuser

EXPOSE 3000
CMD ["node", "server.js"]