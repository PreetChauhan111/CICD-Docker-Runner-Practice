FROM node:20-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

RUN groupadd -G 1001 appgroup && \
    useradd -r -u 1001 -g appuser appuser && \
    chown -R appuser:appuser /app
USER appuser

FROM node:20-alpine AS production

WORKDIR /app

USER 1001

COPY --from=build /app ./

EXPOSE 3000

CMD ["npm", "start"]  