import { useState } from 'react'
import BoxContent from '../../components/BoxContent'
import Input from '../../components/Input'
import Layout from '../../components/Layout'
import Box from '../../components/Box'
import Title from '../../components/Title'
import Button from '../../components/Button'

async function fetchArticleData(url) {
  const response = await fetch('/api/fetch-article', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ url })
  })

  if (!response.ok) {
    throw new Error('Failed to fetch article data')
  }

  const article = await response.json()
  return article
}

export default function ReaderPage() {
  const [url, setUrl] = useState('')
  const [article, setArticle] = useState<string>()

  const handleSubmit = async ev => {
    ev.preventDefault()

    try {
      const articleData = await fetchArticleData(url)

      const firstPart = []
      firstPart.push({ html: `<h1>${articleData.headline.text}</h1>` })
      firstPart.push({
        html: `<p>${new Date(articleData.published_first).toLocaleDateString(
          'pt-BR'
        )}</p>`
      })
      firstPart.push({ html: `<p>${articleData.support_line.text}</p>` })

      if (articleData?.featured_image?.src) {
        firstPart.push({
          html: `<img src="${articleData.featured_image.src}">`
        })
      }

      if (articleData) {
        document.title = articleData.headline.text
        setArticle(
          firstPart
            .concat(articleData.article_body_components)
            .filter(piece => piece?.html)
            .map(piece => piece.html.replaceAll('"//www.', '"https://www.'))
            .join('')
        )
      } else {
        setArticle('<h1>Failed to parse article</h1>')
      }
    } catch (e) {
      setArticle('<h1>Failed to parse article</h1>')
      console.error(e)
    }
  }

  return (
    <Layout>
      <div className="my-24">
        <Box background>
          <Title subTitle="Ler artigo" title={<h2>Copie e cole uma URL</h2>} />
          <div className="w-full">
            <BoxContent>
              <form onSubmit={handleSubmit}>
                <Input
                  autoFocus
                  className="w-full mb-4"
                  name="url"
                  label={'URL'}
                  value={url}
                  onChange={event => setUrl(event.target.value)}
                ></Input>
                <Button type="submit">Ler</Button>
              </form>
            </BoxContent>
          </div>
        </Box>

        {article && (
          <Box background direction="right" className="mt-10">
            <div
              className="w-full my-20 flex-grow text-left prose prose-invert mx-auto lg:prose-lg"
              dangerouslySetInnerHTML={{ __html: article }}
            ></div>
          </Box>
        )}
      </div>
    </Layout>
  )
}
