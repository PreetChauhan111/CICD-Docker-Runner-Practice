FROM node:20-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

RUN addgroup -g 1001 appgroup && \
    adduser -D -u 1001 -G appgroup appuser && \
    chown -R appuser:appgroup /app

USER appuser

FROM node:20-alpine AS production

WORKDIR /app

USER 1001

COPY --from=build /app ./

EXPOSE 3000

CMD ["npm", "start"]  