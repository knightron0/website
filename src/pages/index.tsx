import { Flex, Box, Text } from "@chakra-ui/react";
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'

// import { api } from "~/utils/api";

const inter = Inter({
  subsets: ['latin'],
  weight: "600"
})

const ColfaxWebRegular = localFont({ src: 'ColfaxWebRegular.woff' })
// const ColfaxWebMedium = localFont({ src: 'ColfaxWebMedium.woff' })


const Home: NextPage = () => {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Sarthak Mangla</title>
        <meta name="description" content="I study Computer Science (and some Math) at Purdue University. Currently, I'm trying to build an individualized hearing aid powered by deep learning at Purdue's Heinz Lab. I'm also developing foundational models for cardiac magnetic resonance (CMR) understanding at the CVIRL lab. Recently, a few friends and I have been playing around with LLMs and their possible applications in the group travel space, check us out here!" />
        <meta property="og:title" content="Sarthak Mangla" />
        <meta name="title" content="Sarthak Mangla" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-[#fcf6f2]">
        <Flex direction="column" width="70%" className={ColfaxWebRegular.className}>
          <Box textColor="black">
            <Flex direction="row" alignItems="center" gap={3}>
              <Text fontSize='2xl' align="center" fontWeight="bold" className={inter.className} paddingBottom={5}>Sarthak Mangla</Text>
            </Flex>
            <Text className="text-sm md:text-base">
              I study Computer Science (and some Math) at <Link href="https://www.cs.purdue.edu/" className="underline decoration-dashed underline-offset-4 decoration-1 hover:bg-green-200 hover:bg-opacity-60 cursor-pointer transition-all duration-500 ease-out">Purdue University</Link>. This summer, I&apos;m interning at <Link href="https://bubble.io" className="underline decoration-dashed underline-offset-4 decoration-1 hover:bg-green-200 hover:bg-opacity-60 cursor-pointer transition-all duration-500 ease-out">Bubble</Link> working on AI research & development.
              <br></br>
              <br></br>
              I&apos;m trying to build an individualized <Link href="https://computationalaudiology.com/indivhear-an-individualized-adaptive-deep-learning-based-hearing-aid/" className="underline decoration-dashed underline-offset-4 decoration-1 hover:bg-green-200 hover:bg-opacity-60 cursor-pointer transition-all duration-500 ease-out">hearing aid</Link> powered by deep learning at Purdue&apos;s <Link href="https://engineering.purdue.edu/HeinzLab/people" className="underline decoration-dashed underline-offset-4 decoration-1 hover:bg-green-200 hover:bg-opacity-60 cursor-pointer transition-all duration-500 ease-out">Heinz Lab</Link>. 
              I&apos;m also developing foundational models for cardiac magnetic resonance (CMR) understanding at the <Link href="https://engineering.purdue.edu/cvirl" className="underline decoration-dashed underline-offset-4 decoration-1 hover:bg-green-200 hover:bg-opacity-60 cursor-pointer transition-all duration-500 ease-out">CVIRL lab</Link>.
              A few other things I&apos;ve built include <Link href="https://www.boilerclasses.com/" className="underline decoration-dashed underline-offset-4 decoration-1 hover:bg-green-200 hover:bg-opacity-60 cursor-pointer transition-all duration-500 ease-out">BoilerClasses</Link>, <Link href="https://www.roamer.dev/" className="underline decoration-dashed underline-offset-4 decoration-1 hover:bg-green-200 hover:bg-opacity-60 cursor-pointer transition-all duration-500 ease-out">RoamerAI</Link>, <Link href="https://twitter.com/msarthak29/status/1749267405656687076" className="underline decoration-dashed underline-offset-4 decoration-1 hover:bg-green-200 hover:bg-opacity-60 cursor-pointer transition-all duration-500 ease-out">Pulse</Link>, <Link href="https://chromewebstore.google.com/detail/tempus/bpdhbpeecmmglmkjfmigehaebpndmceh" className="underline decoration-dashed underline-offset-4 decoration-1 hover:bg-green-200 hover:bg-opacity-60 cursor-pointer transition-all duration-500 ease-out">Tempus</Link>, and <Link href="https://www.producthunt.com/products/interview-checklist#interview-checklist" className="underline decoration-dashed underline-offset-4 decoration-1 hover:bg-green-200 hover:bg-opacity-60 cursor-pointer transition-all duration-500 ease-out">Interview Checklist</Link>.
              <br></br>
              <br></br>
              Outside of all this, I love a good pesto dish, roadtrips, and watching <Link href="https://letterboxd.com/sarthakm/" className="underline decoration-dashed underline-offset-4 decoration-1 hover:bg-green-200 hover:bg-opacity-60 cursor-pointer transition-all duration-500 ease-out">movies</Link>. I also sometimes try to make <Link href="https://www.misbalanced.link/" className="underline decoration-dashed underline-offset-4 decoration-1 hover:bg-green-200 hover:bg-opacity-60 cursor-pointer transition-all duration-500 ease-out">generative sketches</Link>.
              <br></br>
            </Text>
          </Box>
          <Box className="py-10 text-gray-500">
            <Link href="https://github.com/knightron0" className="underline decoration-dashed underline-offset-4 decoration-1 hover:bg-green-200 hover:bg-opacity-60 cursor-pointer transition-all duration-500 ease-out">GitHub</Link>, <Link href="https://twitter.com/msarthak29" className="underline decoration-dashed underline-offset-4 decoration-1 hover:bg-green-200 hover:bg-opacity-60 cursor-pointer transition-all duration-500 ease-out">Twitter</Link>,  <Link href="https://linkedin.com/in/sarthakmangla/" className="underline decoration-dashed underline-offset-4 decoration-1 hover:bg-green-200 hover:bg-opacity-60 cursor-pointer transition-all duration-500 ease-out">LinkedIn</Link>, and <Link href="mailto:mangla@purdue.edu" className="underline decoration-dashed underline-offset-4 decoration-1 hover:bg-green-200 hover:bg-opacity-60 cursor-pointer transition-all duration-500 ease-out">Email</Link>
          </Box>
        </Flex>
      </main>
    </>
  );
};

export default Home;
