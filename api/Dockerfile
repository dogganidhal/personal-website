FROM gradle:6.8.3-jdk15 as builder

WORKDIR /api

COPY . .

RUN gradle clean build

FROM openjdk:15.0.1

COPY --from=builder "/api/build/libs/api-*.jar" "/api/application.jar"

CMD ["/usr/bin/java", "-jar", "/api/application.jar"]
