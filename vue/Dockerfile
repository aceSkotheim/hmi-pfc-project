FROM node:lts-alpine

WORKDIR /vue/app

RUN npm --save install -g @vue/cli
RUN npm --save install
RUN npm --save install server

COPY . .
