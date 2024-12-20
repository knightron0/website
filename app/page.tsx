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
        <p>I study Computer Science (and some Math) at <Link href="https://www.cs.purdue.edu/" className="underline decoration-dashed underline-offset-4 decoration-1 hover:bg-green-100 hover:bg-opacity-60 cursor-pointer transition-all duration-500 ease-out">Purdue University</Link>. </p>
        <br />
        <p>I&apos;m working on an individualized deep-learning based <Link href="https://computationalaudiology.com/indivhear-an-individualized-adaptive-deep-learning-based-hearing-aid/" className="underline decoration-dashed underline-offset-4 decoration-1 hover:bg-green-100 hover:bg-opacity-60 cursor-pointer transition-all duration-500 ease-out">hearing aid</Link> at <Link href="https://engineering.purdue.edu/HeinzLab/people" className="underline decoration-dashed underline-offset-4 decoration-1 hover:bg-green-100 hover:bg-opacity-60 cursor-pointer transition-all duration-500 ease-out">Heinz Lab</Link> + developing foundational models for cardiac magnetic resonance (CMR) understanding at the <Link href="https://engineering.purdue.edu/cvirl" className="underline decoration-dashed underline-offset-4 decoration-1 hover:bg-green-100 hover:bg-opacity-60 cursor-pointer transition-all duration-500 ease-out">CVIRL lab</Link>. </p>
        <br />
        <p>Last summer, I helped build AI systems to <Link href="https://bubble.io/blog/bubblecon-2024-bubble-assist-ai/" className="underline decoration-dashed underline-offset-4 decoration-1 hover:bg-green-100 hover:bg-opacity-60 cursor-pointer transition-all duration-500 ease-out">generate full-stack MVPs</Link> on <Link href="https://bubble.io/" className="underline decoration-dashed underline-offset-4 decoration-1 hover:bg-green-100 hover:bg-opacity-60 cursor-pointer transition-all duration-500 ease-out">Bubble</Link>&apos;s visual language.</p>
        <br />
        <p>A few other things I&apos;ve made include <Link href="https://www.boilerclasses.com/" className="underline decoration-dashed underline-offset-4 decoration-1 hover:bg-green-100 hover:bg-opacity-60 cursor-pointer transition-all duration-500 ease-out">BoilerClasses</Link>, <Link href="https://www.roamer.dev/" className="underline decoration-dashed underline-offset-4 decoration-1 hover:bg-green-100 hover:bg-opacity-60 cursor-pointer transition-all duration-500 ease-out">RoamerAI</Link>, <Link href="https://twitter.com/msarthak29/status/1749267405656687076" className="underline decoration-dashed underline-offset-4 decoration-1 hover:bg-green-100 hover:bg-opacity-60 cursor-pointer transition-all duration-500 ease-out">Pulse</Link>, <Link href="https://chromewebstore.google.com/detail/tempus/bpdhbpeecmmglmkjfmigehaebpndmceh" className="underline decoration-dashed underline-offset-4 decoration-1 hover:bg-green-100 hover:bg-opacity-60 cursor-pointer transition-all duration-500 ease-out">Tempus</Link>, and <Link href="https://www.producthunt.com/products/interview-checklist#interview-checklist" className="underline decoration-dashed underline-offset-4 decoration-1 hover:bg-green-100 hover:bg-opacity-60 cursor-pointer transition-all duration-500 ease-out">Interview Checklist</Link>.</p>
        <br />
        <p>Outside of all this, I love a good pesto dish, roadtrips, minimalist design and whodunits. I also sometimes try to make <Link href="https://www.misbalanced.link/" className="underline decoration-dashed underline-offset-4 decoration-1 hover:bg-green-100 hover:bg-opacity-60 cursor-pointer transition-all duration-500 ease-out">generative sketches</Link>.</p>
      </section>
      <Footer></Footer>
    </>
  )
}
