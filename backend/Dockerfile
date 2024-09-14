# Usando uma imagem base com OpenJDK
FROM openjdk:17-jdk-alpine

# Definindo o diretório de trabalho
WORKDIR /app

# Copiando o JAR da aplicação para o contêiner
COPY target/application-0.0.1-SNAPSHOT.jar /app/application-0.0.1-SNAPSHOT.jar

# Expondo a porta em que a aplicação vai rodar
EXPOSE 80

# Comando para rodar a aplicação
ENTRYPOINT ["java", "-jar", "application-0.0.1-SNAPSHOT.jar"]
