FROM node:18-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY src ./src
COPY public ./public
RUN npm run build

RUN addgroup -g 1001 -S appgroup \
 && adduser -u 1001 -S appuser -G appgroup
USER 1001

FROM nginx:alpine AS production

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]