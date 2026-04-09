import { GraphQLClient, gql } from "graphql-request";

const client = new GraphQLClient(process.env.WP_ENDPOINT);

export async function getAllPosts() {
  const { posts } = await client.request(gql`
    query AllPosts {
      posts(first: 100) {
        nodes {
          id
          title
          slug
          date
          excerpt
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
          categories {
            nodes {
              name
              slug
            }
          }
        }
      }
    }
  `);
  return posts.nodes;
}

export async function getPostBySlug(slug) {
  const { post } = await client.request(
    gql`
      query PostBySlug($slug: ID!) {
        post(id: $slug, idType: SLUG) {
          title
          content
          date
          author {
            node {
              name
            }
          }
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
        }
      }
    `,
    { slug },
  );
  return post;
}

export async function getPageBySlug(slug) {
  const { page } = await client.request(
    gql`
      query GetPage($slug: ID!) {
        page(id: $slug, idType: URI) {
          title
          content
          modified
        }
      }
    `,
    { slug },
  );
  return page;
}
