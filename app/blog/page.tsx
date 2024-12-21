import { BlogPosts } from 'app/components/posts'
import { Cormorant_Garamond } from 'next/font/google'

export const metadata = {
  title: 'Blog',
}

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: "400"
})

export default function Page() {
  return (
    <section>
      <h1 className="text-2xl md:text-3xl font-semibold mb-8" style={{ fontFamily: cormorantGaramond.style.fontFamily }}>Posts</h1>
      <BlogPosts />
    </section>
  )
}
