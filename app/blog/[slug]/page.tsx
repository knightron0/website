import { notFound } from 'next/navigation'
import { CustomMDX } from 'app/components/mdx'
import { formatDate, getBlogPosts } from 'app/blog/utils'
import { baseUrl } from 'app/sitemap'
import Footer from 'app/components/footer'
import { Cormorant_Garamond } from 'next/font/google'

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: "400"
})

export async function generateStaticParams() {
  let posts = getBlogPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export function generateMetadata({ params }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug)
  if (!post) {
    return
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata
  let ogImage = image
    ? image
    : `${baseUrl}/og/blog/${post.slug}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

export default function Blog({ params }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  const renderAuthors = (authors?: string) => {
    if (!authors) return null

    const matches = Array.from(
      authors.matchAll(/\[([^\]]+)\]\(([^)]+)\)/g)
    )

    // If no markdown-style links are found, just render the raw string
    if (matches.length === 0) {
      return authors
    }

    const parts: any[] = []

    matches.forEach((match, index) => {
      const name = match[1]
      const href = match[2]

      if (index > 0) {
        parts.push(', ')
      }

      parts.push(
        <a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="author-link"
        >
          {name}
        </a>
      )
    })

    return parts
  }

  return (
    <>
      <section>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BlogPosting',
              headline: post.metadata.title,
              datePublished: post.metadata.publishedAt,
              dateModified: post.metadata.publishedAt,
              description: post.metadata.summary,
              image: post.metadata.image
                ? `${baseUrl}${post.metadata.image}`
                : `${baseUrl}/og/blog/${post.slug}`,
              url: `${baseUrl}/blog/${post.slug}`,
              author: {
                '@type': 'Person',
                name: 'My Portfolio',
              },
            }),
          }}
        />
        <h1 className="text-2xl md:text-4xl font-semibold" style={{ fontFamily: cormorantGaramond.style.fontFamily }}>
          {post.metadata.title}
        </h1>
        <div className="flex items-center my-2 text-md">
          {post.metadata.authors && (
            <p className="text-md text-neutral-600">
              {renderAuthors(post.metadata.authors)}
            </p>
          )}
          {post.metadata.authors && (
            <span className="mx-2 text-neutral-400">·</span>
          )}
          <p className="text-md text-neutral-600">
            {formatDate(post.metadata.publishedAt, false, false)}
          </p>
        </div>
        <hr className="my-4 border-gray-300" />
        <article className="prose">
          <CustomMDX source={post.content} />
        </article>
        <div className="my-10 border-t border-gray-300" />
      </section>
      <Footer></Footer>
    </>
  )
}
