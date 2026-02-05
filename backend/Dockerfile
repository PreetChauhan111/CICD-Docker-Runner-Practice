FROM node:18-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --only=production

COPY server.js ./

FROM gcr.io/distroless/nodejs18

WORKDIR /app

COPY --from=build /app ./

USER 1001

EXPOSE 3000

CMD ["node", "server.js"]
