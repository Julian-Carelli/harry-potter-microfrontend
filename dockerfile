FROM node:18-alpine AS development
LABEL version="1.0"
ENV NODE_ENV development

COPY package.json .
RUN npm i 
COPY . .

EXPOSE 3005

CMD ["npm", "run", "dev"]