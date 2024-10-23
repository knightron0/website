import { Flex, Box, Text } from "@chakra-ui/react";
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Inter, Cormorant_Garamond } from 'next/font/google'
import localFont from 'next/font/local'

// import { api } from "~/utils/api";

const inter = Inter({
  subsets: ['latin'],
  weight: "400"
})

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: "400"
})

const ColfaxWebRegular = localFont({ src: 'ColfaxWebRegular.woff' })


const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Sarthak Mangla</title>
        <meta name="description" content="I study Computer Science (and some Math) at Purdue University. Currently, I'm trying to build an individualized hearing aid powered by deep learning at Purdue's Heinz Lab. I'm also developing foundational models for cardiac magnetic resonance (CMR) understanding at the CVIRL lab. Recently, a few friends and I have been playing around with LLMs and their possible applications in the group travel space, check us out here!" />
        <meta property="og:title" content="Sarthak Mangla" />
        <meta name="title" content="Sarthak Mangla" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <main className="relative h-screen w-screen bg-[#fcf6f2] overflow-hidden">
        <div className="absolute bottom-[-5%] right-[-10%] md:top-1/2 md:left-1/2 w-3/5 aspect-square rounded-full bg-[#D1E8E2] opacity-50 animate-big overflow-hidden select-none" />
        <div className="absolute bottom-[20%] right-[-10%] md:top-[15%] md:right-[-10%] w-1/3 aspect-square rounded-full bg-[#A9D6E5] opacity-50 animate-small overflow-hidden select-none" style={{ clipPath: "circle(50% at 50% 50%)" }} />
        <div className="absolute bottom-[-10%] left-[-20%] md:bottom-[-50%] md:left-[-25%] w-1/2 aspect-square rounded-full bg-[#19747E] opacity-50 animate-medium overflow-hidden select-none" style={{ clipPath: "circle(50% at 50% 50%)" }} />
        <div className="ml-16 md:ml-24 mt-16 w-2/3 flex flex-col text-xs sm:text-sm md:text-base" style={{ fontFamily: inter.style.fontFamily }}>
          <div className="text-2xl md:text-3xl font-semibold pb-5" style={{ fontFamily: cormorantGaramond.style.fontFamily }}>Sarthak Mangla</div>
          <p>I study Computer Science (and some Math) at <Link href="https://www.cs.purdue.edu/" className="underline decoration-dashed underline-offset-4 decoration-1 hover:bg-green-100 hover:bg-opacity-60 cursor-pointer transition-all duration-500 ease-out">Purdue University</Link>. </p>
          <br />
          <p>I&apos;m working on an individualized deep-learning based <Link href="https://computationalaudiology.com/indivhear-an-individualized-adaptive-deep-learning-based-hearing-aid/" className="underline decoration-dashed underline-offset-4 decoration-1 hover:bg-green-100 hover:bg-opacity-60 cursor-pointer transition-all duration-500 ease-out">hearing aid</Link> at <Link href="https://engineering.purdue.edu/HeinzLab/people" className="underline decoration-dashed underline-offset-4 decoration-1 hover:bg-green-100 hover:bg-opacity-60 cursor-pointer transition-all duration-500 ease-out">Heinz Lab</Link> + developing foundational models for cardiac magnetic resonance (CMR) understanding at the <Link href="https://engineering.purdue.edu/cvirl" className="underline decoration-dashed underline-offset-4 decoration-1 hover:bg-green-100 hover:bg-opacity-60 cursor-pointer transition-all duration-500 ease-out">CVIRL lab</Link>. </p>
          <br />
          <p>Last summer, I helped build AI systems for <Link href="https://bubble.io/blog/bubblecon-2024-bubble-assist-ai/" className="underline decoration-dashed underline-offset-4 decoration-1 hover:bg-green-100 hover:bg-opacity-60 cursor-pointer transition-all duration-500 ease-out">generating full-stack MVPs</Link> on <Link href="https://bubble.io/" className="underline decoration-dashed underline-offset-4 decoration-1 hover:bg-green-100 hover:bg-opacity-60 cursor-pointer transition-all duration-500 ease-out">Bubble</Link>&apos;s visual language.</p>
          <br />
          <p>A few other things I&apos;ve built include <Link href="https://www.boilerclasses.com/" className="underline decoration-dashed underline-offset-4 decoration-1 hover:bg-green-100 hover:bg-opacity-60 cursor-pointer transition-all duration-500 ease-out">BoilerClasses</Link>, <Link href="https://www.roamer.dev/" className="underline decoration-dashed underline-offset-4 decoration-1 hover:bg-green-100 hover:bg-opacity-60 cursor-pointer transition-all duration-500 ease-out">RoamerAI</Link>, <Link href="https://twitter.com/msarthak29/status/1749267405656687076" className="underline decoration-dashed underline-offset-4 decoration-1 hover:bg-green-100 hover:bg-opacity-60 cursor-pointer transition-all duration-500 ease-out">Pulse</Link>, <Link href="https://chromewebstore.google.com/detail/tempus/bpdhbpeecmmglmkjfmigehaebpndmceh" className="underline decoration-dashed underline-offset-4 decoration-1 hover:bg-green-100 hover:bg-opacity-60 cursor-pointer transition-all duration-500 ease-out">Tempus</Link>, and <Link href="https://www.producthunt.com/products/interview-checklist#interview-checklist" className="underline decoration-dashed underline-offset-4 decoration-1 hover:bg-green-100 hover:bg-opacity-60 cursor-pointer transition-all duration-500 ease-out">Interview Checklist</Link>.</p>
          <br />
          <p>Outside of all this, I love a good pesto dish, roadtrips, minimalist design and whodunits. I also sometimes try to make <Link href="https://www.misbalanced.link/" className="underline decoration-dashed underline-offset-4 decoration-1 hover:bg-green-100 hover:bg-opacity-60 cursor-pointer transition-all duration-500 ease-out">generative sketches</Link>.</p>
          <p className="py-10 text-gray-500">
            <Link href="https://github.com/knightron0" className="underline decoration-dashed underline-offset-4 decoration-1 hover:bg-green-100 hover:bg-opacity-60 cursor-pointer transition-all duration-500 ease-out">GitHub</Link>, <Link href="https://twitter.com/msarthak29" className="underline decoration-dashed underline-offset-4 decoration-1 hover:bg-green-100 hover:bg-opacity-60 cursor-pointer transition-all duration-500 ease-out">Twitter</Link>,  <Link href="https://linkedin.com/in/sarthakmangla/" className="underline decoration-dashed underline-offset-4 decoration-1 hover:bg-green-100 hover:bg-opacity-60 cursor-pointer transition-all duration-500 ease-out">LinkedIn</Link>, and <Link href="mailto:mangla@purdue.edu" className="underline decoration-dashed underline-offset-4 decoration-1 hover:bg-green-100 hover:bg-opacity-60 cursor-pointer transition-all duration-500 ease-out">Email</Link>
          </p>
        </div>
      </main>
    </>
  );
};

export default Home;
