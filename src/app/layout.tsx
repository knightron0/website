
import "~/styles/globals.css";
import { type Metadata } from "next";
import { baseUrl } from "./sitemap";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Sarthak Mangla',
  description: "I study Computer Science (and some Math) at Purdue University. Currently, I'm trying to build an individualized hearing aid powered by deep learning at Purdue's Heinz Lab. I'm also developing foundational models for cardiac magnetic resonance (CMR) understanding at the CVIRL lab.",
  openGraph: {
    title: 'Sarthak Mangla',
    description: "I study Computer Science (and some Math) at Purdue University. Currently, I'm trying to build an individualized hearing aid powered by deep learning at Purdue's Heinz Lab. I'm also developing foundational models for cardiac magnetic resonance (CMR) understanding at the CVIRL lab.",
    url: baseUrl,
    siteName: 'Sarthak Mangla',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
