FROM node:18 AS builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM node:18 AS final
ENV NODE_ENV=production
WORKDIR /app
COPY --from=builder ./app/dist ./dist
COPY package.json .
COPY package-lock.json .
RUN npm pkg delete scripts.prepare
RUN npm install
CMD ["npm", "run", "start"]