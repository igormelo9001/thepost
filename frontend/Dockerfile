# Etapa de build da aplicação
FROM node:18 AS build

# Definindo o diretório de trabalho
WORKDIR /app

# Copiando os arquivos de dependências primeiro
COPY ./package.json ./package-lock.json ./

# Instalando as dependências
RUN npm install

# Copiando o restante do código-fonte
COPY . .

# Construindo o app
RUN npm run build

# Etapa para servir com Nginx
FROM nginx:alpine

# Copiando os arquivos estáticos do build para o diretório do Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Expondo a porta em que o Nginx vai servir o app
EXPOSE 80

# Comando padrão do Nginx para iniciar
CMD ["nginx", "-g", "daemon off;"]
