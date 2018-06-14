# Boilerplate for GraphQL Yoga and Typescript

# start a docker instance of postgres

docker run --name my-postgres -d -p 5432:5432 -e POSTGRES_DB=node-graphql-ts postgres

# start a command line instance of postgres

docker run -it --rm --link my-postgres:postgres postgres psql -h postgres -U postgres node-graphql-ts
