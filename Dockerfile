FROM node:20-alpine AS build

WORKDIR /app

COPY package.json ./
COPY .env.local ./

RUN npm install

COPY . .

ARG VITE_IFRAME_URL
ENV VITE_IFRAME_URL=$VITE_IFRAME_URL

RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
