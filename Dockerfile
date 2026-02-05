FROM node:18-alpine AS build

WORKDIR /app

COPY package.json ./
RUN npm install

COPY server.js ./

RUN groupadd -g 1001 appgroup && useradd -r -u 1001 -g appgroup appuser
USER appuser

FROM gcr.io/distroless/nodejs:18 AS runtime

WORKDIR /app

COPY --from=build /app ./

EXPOSE 3000

CMD ["server.js"]