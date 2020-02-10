FROM node:10-alpine

WORKDIR /home/node

COPY . /home/node

RUN npm install

RUN npm run build

CMD ["npm", "run", "start"]
