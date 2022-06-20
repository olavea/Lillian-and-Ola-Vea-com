Developing and Experimenting
You can open up http://localhost:4000 with the API running, which will load a GraphQL Playground, which is a GraphQL IDE (like GraphiQL, that Gatsby runs at http://localhost:8000/___graphql) for running queries and mutations on the data from the API.

You can test a query like this to see data returned:

query {
  posts {
    id
    slug
  }
}
This query will return the IDs for all posts in the API. You can copy one of these IDs and provide it as an argument to a mutation to update information about that post.