#!/usr/bin/env sh
# Script wrapper for Maven (Unix/Linux)
./mvnw spring-boot:run -Dspring-boot.run.jvmArguments="-Dspring.profiles.active=dev"
