FROM node:lts-alpine AS client-builder

WORKDIR /app
COPY package*.json ./
RUN npm i

COPY tsconfig.json ./
COPY public ./public
COPY src ./src

RUN npm run build

FROM node:lts-alpine

WORKDIR /app
COPY --from=client-builder /app/build /app/build

CMD npx serve /app/build