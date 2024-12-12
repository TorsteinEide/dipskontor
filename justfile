setupdb:
    docker compose up -d

build:
    cd backend && sqlx migrate run && dotnet build

test: setupdb build
    cd backend && dotnet test

teardown:
    docker compose down
