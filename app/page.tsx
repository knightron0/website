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
        <p>I study Computer Science (and some Math) at <Link href="https://www.cs.purdue.edu/">Purdue University</Link>.</p>
        <br />
        <p>I spent this past summer breaking (and building) serving infrastructure and chasing Time-to-First Audio (TTFA) at <Link href="https://cartesia.ai">Cartesia AI</Link>.</p>
        <br />
        <p>My latest obsession is ML systems. A manifestation of that is <Link href="https://tensara.org">Tensara</Link>. Feel free to <Link href="https://github.com/tensara/tensara">leave a few PRs</Link> too while you're trying it out!</p>
        <br /> 
        <p>I&apos;m also exploring robust self-supervised learning for speech enhancement at the <Link href="https://engineering.purdue.edu/HeinzLab/people">Heinz Lab</Link> + developing lightweight representation models for cardiac magnetic resonance (CMR) understanding at the <Link href="https://engineering.purdue.edu/cvirl">CVIRL lab</Link>.</p> 
        <br /> 
        <p>A few other things I&apos;ve made include <Link href="https://boilerclasses.com/">BoilerClasses</Link>, <Link href="https://www.whatdidyoudo.dev/">What Did You Do</Link>, <Link href="https://www.roamer.dev/">RoamerAI</Link>, <Link href="https://twitter.com/msarthak29/status/1749267405656687076">Pulse</Link>, <Link href="https://chromewebstore.google.com/detail/tempus/bpdhbpeecmmglmkjfmigehaebpndmceh">Tempus</Link>, and <Link href="https://www.producthunt.com/products/interview-checklist#interview-checklist">Interview Checklist</Link>.</p> 
        <br />
        <p>In the past past, I was really into  <Link href="https://www.iarcs.org.in/inoi/2022/inoi2022/results_inoi2022.php#gold">competitive programming</Link> and <Link href="https://ioling.org/participants/IND">linguistics</Link>. </p>
        <br />
        <p>Outside of all this, I love a good pesto dish, roadtrips, minimalist design and whodunits. I also sometimes try to make <Link href="https://www.misbalanced.link/">generative sketches</Link>.</p>
      </section>
      <Footer></Footer>
    </>
  )
}
