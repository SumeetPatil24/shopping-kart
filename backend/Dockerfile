# backend/Dockerfile
FROM node:18-alpine
#FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV GOOGLE_CLIENT_ID=182972205106-4jm66esacliu99jbb047jnpl4cihc90j.apps.googleusercontent.com
ENV GOOGLE_CLIENT_SECRET=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
ENV FRONTEND_URL=http://localhost:5174

EXPOSE 5000

CMD ["npm", "start"]