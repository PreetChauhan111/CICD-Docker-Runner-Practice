FROM node:18-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY server.js ./

RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

FROM gcr.io/distroless/nodejs18 AS runtime

WORKDIR /app

USER appuser

COPY --from=build /app ./

EXPOSE 3000

CMD ["server.js"]