FROM node:18-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY src ./src
COPY public ./public
RUN npm run build


RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

FROM nginx:alpine AS production

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]