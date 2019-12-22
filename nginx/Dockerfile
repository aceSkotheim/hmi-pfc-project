FROM nginx:1.14.2-alpine

RUN rm /etc/nginx/conf.d/default.conf
COPY sites-enabled/default.conf /etc/nginx/conf.d/default.conf
#COPY ssl/ /etc/ssl
