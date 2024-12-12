FROM docker.artifacts.dev.dips.no/dotnet/sdk:9.0-alpine AS build

WORKDIR /src
COPY . .

RUN dotnet publish -o app/ src/dipskontor

# Runtime image
FROM docker.artifacts.dev.dips.no/dotnet/aspnet:9.0-alpine

WORKDIR /app

# For security reasons
RUN apk upgrade musl
# For timezone
RUN apk update && apk add --no-cache tzdata
ENV TZ=Europe/Oslo

# Create a separate user to avoid using root
RUN adduser --disabled-password \
    --home /app \
    --uid 1000 \
    --gecos '' dipskontor && chown -R dipskontor /app
USER dipskontor
ENV ASPNETCORE_URLS=http://*:5000
EXPOSE 5000

COPY --from=build src/app ./

ENTRYPOINT [ "dotnet", "dipskontor.dll" ]

