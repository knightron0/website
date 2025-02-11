import { Cormorant_Garamond } from 'next/font/google'
import Link from "next/link";
import Footer from './components/footer';

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: "400"
})

export default function Page() {
  return (
    <>
      <section className='mb-10'>
        <div className="text-2xl md:text-3xl font-semibold pb-5" style={{ fontFamily: cormorantGaramond.style.fontFamily }}>Sarthak Mangla</div>
        <p>I study Computer Science (and some Math) at <Link href="https://www.cs.purdue.edu/">Purdue University</Link>. </p>
        <br />
        <p>I&apos;m working on an individualized deep-learning based <Link href="https://computationalaudiology.com/indivhear-an-individualized-adaptive-deep-learning-based-hearing-aid/">hearing aid</Link> at <Link href="https://engineering.purdue.edu/HeinzLab/people">Heinz Lab</Link> + developing foundational models for cardiac magnetic resonance (CMR) understanding at the <Link href="https://engineering.purdue.edu/cvirl">CVIRL lab</Link>. </p>
        <br />
        <p>Last summer, I helped build AI systems to <Link href="https://bubble.io/blog/bubblecon-2024-bubble-assist-ai/">generate full-stack MVPs</Link> on <Link href="https://bubble.io/" >Bubble</Link>&apos;s visual DSL.</p>
        <br />
        <p>A few other things I&apos;ve made include <Link href="https://boilerclasses.com/">BoilerClasses</Link>, <Link href="https://www.whatdidyoudo.dev/">What Did You Do</Link>, <Link href="https://www.roamer.dev/">RoamerAI</Link>, <Link href="https://twitter.com/msarthak29/status/1749267405656687076">Pulse</Link>, <Link href="https://chromewebstore.google.com/detail/tempus/bpdhbpeecmmglmkjfmigehaebpndmceh">Tempus</Link>, and <Link href="https://www.producthunt.com/products/interview-checklist#interview-checklist">Interview Checklist</Link>.</p>
        <br />
        <p>Outside of all this, I love a good pesto dish, roadtrips, minimalist design and whodunits. I also sometimes try to make <Link href="https://www.misbalanced.link/">generative sketches</Link>.</p>
      </section>
      <Footer></Footer>
    </>
  )
}
