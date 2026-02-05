FROM node:18-alpine AS build

WORKDIR /app

COPY package.json ./
RUN npm install

COPY server.js ./

RUN addgroup -g 1001 appgroup && adduser -u 1001 -G appgroup appuser
USER appuser

FROM gcr.io/distroless/nodejs:18 AS runtime

WORKDIR /app

COPY --from=build /app ./

EXPOSE 3000

CMD ["server.js"]