# Dependencias de desarrollo
# FROM node:16 as install
# WORKDIR /app
# COPY package.json ./
# RUN npm install


# # Build y Tests
# FROM node:16 as test
# WORKDIR /app
# COPY --from=install /app/node_modules ./node_modules
# COPY . .
# RUN npm run test

# # Dependencias de Producción
# FROM node:16 as prod-deps
# WORKDIR /app
# COPY package.json ./
# RUN npm install

# # Ejecutar la APP
# FROM node:16 as runner
# WORKDIR /app
# COPY --from=prod-deps /app/node_modules ./node_modules
# COPY . .
# CMD [ "npm", "run","start:dev" ]
# Etapa de instalación
FROM node:16 as install
WORKDIR /app
COPY package.json ./
RUN npm install

# Etapa de pruebas
FROM node:16 as test
WORKDIR /app
COPY --from=install /app/node_modules ./node_modules
COPY . .
RUN npm run test

# Dependencias de producción
FROM node:16 as prod-deps
WORKDIR /app
COPY package.json ./
RUN npm install

# Etapa de ejecución
FROM node:16 as runner
WORKDIR /app
COPY --from=prod-deps /app/node_modules ./node_modules
COPY . .

# Configurar las variables de entorno
ENV PORT=3000
ENV MONGO_USERNAME=jjrz1350517171
ENV MONGO_PASSWORD=1350517171
ENV MONGO_HOST=cluster0.ezxkxg9.mongodb.net
ENV MONGO_DB=

EXPOSE 3000
# Comando para ejecutar la aplicación
CMD [ "npm", "run", "start:dev" ]
