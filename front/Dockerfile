FROM node:14.20-slim as node

WORKDIR /tmp/build

RUN npm install -g @angular/cli@6

COPY package.json .
COPY package-lock.json .
RUN npm ci
RUN npm i

COPY . .
RUN ng build -c production

FROM nginx:1.23-alpine
COPY config/conf.d /etc/nginx/conf.d/default.conf

COPY --from=node /tmp/build/dist /usr/share/nginx/html

COPY docker-entrypoint.sh .

EXPOSE 80

ENTRYPOINT [ "./docker-entrypoint.sh" ]

