# ---------- Build Stage ----------
FROM node:20-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --omit=dev

COPY . .

# ---------- Production Stage ----------
FROM gcr.io/distroless/nodejs:20

WORKDIR /app

# Distroless uses nonroot user 65532 by default
USER 65532

COPY --from=build /app/src ./src
COPY --from=build /app/package.json ./

EXPOSE 5000

CMD ["src/server.js"]
