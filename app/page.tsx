import { Cormorant_Garamond } from 'next/font/google'
import Link from "next/link";
import Footer from './components/footer';
import { baseUrl } from './sitemap';

export const metadata = {
  alternates: { canonical: baseUrl },
};

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
        <p>I'm broadly interested in improving compute and data efficiency across the AI stack. My immediate goal is to build intuition for each layer so I can contribute meaningfully to both. </p>
        <br />
        <p>So far, this has included large-scale serving infrastructure at <Link href="https://cartesia.ai">Cartesia AI</Link>, low-level GPU benchmarking work at <Link href="https://tensara.org">Tensara</Link>, research on <Link href="https://sarthakmangla.com/blog/bam/">optimizer dynamics</Link>, and self-supervised representation learning for healthcare at the <Link href="https://engineering.purdue.edu/cvirl">CVIRL</Link> and <Link href="https://engineering.purdue.edu/HeinzLab/people">Heinz</Link> labs.</p>
        <br />
        <p>Some of my past work includes <Link href="https://boilerclasses.com/">BoilerClasses</Link>, <Link href="https://github.com/Divide-By-0/whatdidyoudo">What Did You Do</Link>, <Link href="https://twitter.com/msarthak29/status/1749267405656687076">Pulse</Link>, <Link href="https://chromewebstore.google.com/detail/tempus/bpdhbpeecmmglmkjfmigehaebpndmceh">Tempus</Link>, and <Link href="https://www.producthunt.com/products/interview-checklist#interview-checklist">Interview Checklist</Link>. Before that, I was really into  <Link href="https://www.iarcs.org.in/inoi/2022/inoi2022/results_inoi2022.php#gold">competitive programming</Link> and <Link href="https://ioling.org/participants/IND">linguistics</Link>. </p>
        <br />
        <p>Outside of all this, I love a good pesto dish, roadtrips, minimalist design and whodunits. I also sometimes try to make <Link href="https://www.misbalanced.link/">generative sketches</Link>.</p>
      </section>
      <Footer></Footer>
    </>
  )
}
