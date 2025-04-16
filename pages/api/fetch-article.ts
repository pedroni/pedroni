import type { NextApiRequest, NextApiResponse } from 'next'

async function fetchArticleData(articleUrl) {
  // Extract the friendly title from the URL.
  // Assumes the friendly title is the part after the last "/"
  const urlParts = articleUrl.split('?')[0].split('/')
  const friendlyTitle = urlParts[urlParts.length - 1]

  // Define the classifications.
  // In this example, we hard-code them based on the URL structure.
  const classifications = [
    'clicrbs-rs',
    'clicrbs-rs/gauchazh',
    'clicrbs-rs/gauchazh/pioneiro',
    'clicrbs-rs/gauchazh/pioneiro/geral'
  ]

  // GraphQL endpoint
  const endpoint = 'https://gauchazh.clicrbs.com.br/graphql?v=2'

  // Build the payload with the dynamic friendlyTitle.
  const payload = {
    operationName: 'content',
    variables: {
      classifications,
      friendlyTitle,
      preview: false,
      template: 'gauchazh'
    },
    query: `query content($friendlyTitle: String!, $classifications: [String]!, $preview: Boolean, $template: String) {
        article(friendlyTitle: $friendlyTitle, preview: $preview, template: $template) {
          published_first
          published
          canonical
          exposed_id
          friendly_title
          featured_image {
            src
            caption
            credit
            size
            __typename
          }
          has_show_heroes
          content_type
          authors_complement
          allow_comments
          meta {
            model_type {
              type
              label
              __typename
            }
            content_type {
              type
              label
              description
              __typename
            }
            format_type {
              type
              label
              __typename
            }
            __typename
          }
          trust_data {
            references {
              reference_type
              title
              url
              __typename
            }
            backstory {
              title
              description
              __typename
            }
            correction {
              text
              date_published
              __typename
            }
            __typename
          }
          authors {
            id
            name
            photo
            email
            facebook
            twitter
            page_link
            page_enabled
            job_title
            type
            __typename
          }
          headline {
            text
            __typename
          }
          deck {
            text
            __typename
          }
          support_line {
            text
            __typename
          }
          article_body_components {
            html
            type
            data {
              embed
              embed_type
              provider_name
              arenaId
              images {
                src
                credit
                label
                __typename
              }
              image {
                src
                size
                caption
                credit
                __typename
              }
              type
              __typename
            }
            __typename
          }
          components {
            html
            text
            type
            src
            __typename
          }
          tags {
            name
            slug
            __typename
          }
          seo {
            title
            description
            no_index
            __typename
          }
          classification {
            name
            exhibition_name
            __typename
          }
          __typename
        }
        classifications(slugs: $classifications) {
          id
          name
          slug
          exhibition_name
          type
          path
          description
          theme {
            primary_color
            __typename
          }
          images {
            cover {
              src
              __typename
            }
            profile {
              src
              __typename
            }
            logo {
              src
              __typename
            }
            site_logo {
              svg
              __typename
            }
            __typename
          }
          links {
            canonical
            __typename
          }
          __typename
        }
      }`
  }

  // Call the GraphQL endpoint using fetch
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      origin: 'https://gauchazh.clicrbs.com.br',
      referer: 'https://gauchazh.clicrbs.com.br/'
    },
    body: JSON.stringify(payload)
  })
  const data = await response.json()
  const article = data.data.article
  return article
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { url } = req.body

  if (!url) {
    return res.status(400).json({ error: 'Missing articleUrl in request body' })
  }
  try {
    const data = await fetchArticleData(url)
    res.status(200).json(data)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal server error' })
  }
}
