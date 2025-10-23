FROM docker.io/nginx:alpine

ENV HOST=0.0.0.0

ENV PORT=4000

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY apps/app/dist .

COPY apps/app/proxy.nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]
