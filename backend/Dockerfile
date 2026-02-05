FROM node:20-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

RUN addgroup -G 1001 -S appgroup && adduser -S appuser -u 1001 -G appgroup
USER appuser

FROM node:20-alpine AS production

WORKDIR /app

USER 1001

COPY --from=build /app ./

EXPOSE 3000

CMD ["npm", "start"]  