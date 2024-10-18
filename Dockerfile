FROM nginx:1.27.2-alpine

RUN rm -rf /usr/share/nginx/html/*

COPY ./src /usr/share/nginx/html/

COPY entrypoint.sh /entrypoint.sh

RUN chmod +x /entrypoint.sh

ENTRYPOINT /entrypoint.sh