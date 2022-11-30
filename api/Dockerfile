FROM maven:3.8.6-amazoncorretto-17 as maven
WORKDIR /tmp/build
COPY pom.xml .
RUN mvn dependency:go-offline

COPY . .
RUN mvn package -DskipTests

FROM amazoncorretto:17
WORKDIR /app
COPY --from=maven /tmp/build/target/*.jar /app/app.jar

EXPOSE 8080
ENTRYPOINT ["java", "-jar", "/app/app.jar"]