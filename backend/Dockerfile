FROM node:18-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY server.js ./

RUN addgroup -g 1001 -S appgroup \
 && adduser -u 1001 -S appuser -G appgroup

FROM gcr.io/distroless/nodejs18 AS runtime

WORKDIR /app

USER 1001

COPY --from=build /app ./

EXPOSE 3000

CMD ["server.js"]
