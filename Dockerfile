FROM node:19-alpine3.15

COPY . /app

WORKDIR /app

EXPOSE 4444

RUN npm install
CMD ["npm", "run", "build"]
