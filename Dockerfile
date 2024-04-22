FROM node:19.5.0-alpine

WORKDIR /cclapp

#COPY public/ /cclapp/public
#COPY src/ /cclapp/src
#COPY package.json /cclapp/

RUN pwd

COPY . .

RUN ls -latr

RUN npm install --legacy-peer-deps


EXPOSE 8080

CMD ["npm","start"]