import Link from "next/link";

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="mb-16">
      <p className="text-gray-500">
        <Link href="https://github.com/knightron0" className="underline decoration-dashed underline-offset-4 decoration-1 hover:bg-green-100 hover:bg-opacity-60 cursor-pointer transition-all duration-500 ease-out">GitHub</Link>, <Link href="https://twitter.com/msarthak29" className="underline decoration-dashed underline-offset-4 decoration-1 hover:bg-green-100 hover:bg-opacity-60 cursor-pointer transition-all duration-500 ease-out">Twitter</Link>, <Link href="mailto:mangla@purdue.edu" className="underline decoration-dashed underline-offset-4 decoration-1 hover:bg-green-100 hover:bg-opacity-60 cursor-pointer transition-all duration-500 ease-out">Email</Link>
      </p>
    </footer>
  )
}
